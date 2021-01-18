import { InstructionSet } from './InstructionSet';

describe('Instruction percent', () => {
    const setObject = new InstructionSet();

    setObject.generateProblem();
    const { classA, classB, classC } = { ...setObject };

    it('should not be negative', () => {
        expect(classA.instructionPercent).not.toBeLessThan(0);
        expect(classB.instructionPercent).not.toBeLessThan(0);
        expect(classC.instructionPercent).not.toBeLessThan(0);
    });

    it('should add up to 100.', () => {
        const result = classA.instructionPercent + classB.instructionPercent + classC.instructionPercent;

        expect(result).toEqual(100);
    });
});