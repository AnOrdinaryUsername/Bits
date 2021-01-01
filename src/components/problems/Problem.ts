export default interface Problem {
    generateProblem: () => void;
    evaluateAnswer: () => void;
}