import { InstructionSet } from './InstructionSet';

interface InstructionPercents {
    classA: number;
    classB: number;
    classC?: number;
}

describe('Instruction percent', () => {
    function grabInstructionPercents(): InstructionPercents {
        const problem = new InstructionSet();
        problem.generateProblem();

        const { classA, classB, classC, isClassCPresent } = { ...problem };

        if (isClassCPresent) {
            return {
                classA: classA.instructionPercent,
                classB: classB.instructionPercent,
                classC: classC.instructionPercent,
            };
        }

        return {
            classA: classA.instructionPercent,
            classB: classB.instructionPercent,
        };
    }

    const percents = Object.values(grabInstructionPercents());

    it('should not be negative or 0', () => {
        percents.forEach((element) => expect(element).not.toBeLessThanOrEqual(0));
    });

    it('should add up to 100', () => {
        const percentTotal = percents.reduce((total, currentValue) => total + currentValue);

        expect(percentTotal).toBe(100);
    });
});
