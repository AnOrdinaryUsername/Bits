/* Given the following form in scientific notation:
*                   m * 10^n
*           m = significand , n = exponent
*/
interface ScientificNotation {
    significand: number;
    exponent: number;
}

class ScientificNotationConverter {
    private _form: ScientificNotation;

    constructor() {
        this._form = {
            significand: null,
            exponent: null,
        };
    }

    // Convert a decimal number to scientific notation
    // E.g. convertToScientificNotation(12345, 2) ====> "1.23e+4"
    // integerPart = decimal number to convert, fractionalPart = how many numbers to round off
    private convertToScientificNotation = (integerPart: string | number,
        fractionalPart: number): string => {
        if (typeof integerPart === "number") {
            integerPart = integerPart.toString();
        }

        let resultWithoutMantissa;

        if (fractionalPart === 0) {
            resultWithoutMantissa = Number.parseFloat(integerPart).toExponential(0);
            return resultWithoutMantissa;
        }

        const resultWithMantissa = Number.parseFloat(integerPart).toExponential(fractionalPart);

        // Start at the number after the decimal and stop at e
        // e.g. "1.23e+4" ==> look at "23" part
        const start = resultWithMantissa.indexOf(".") + 1;
        const stop = resultWithMantissa.indexOf("e");

        // If it isn't "00" return 2 decimal places otherwise no decimal.
        for (let i = start; i < stop; ++i) {
            if (resultWithMantissa[i] !== "0") {
                return resultWithMantissa;
            }
        }

        resultWithoutMantissa = Number.parseFloat(integerPart).toExponential(0);
        return resultWithoutMantissa;
    };

    // Returns an object literal containing significand and exponent of a form in scientific notation.
    public generateForm = (decimal: number | string, fraction: number): ScientificNotation => {
        const convertedForm = this.convertToScientificNotation(decimal, fraction);
        const stopSearch = convertedForm.indexOf("e");

        // Grab all elements to the left of "e" and concatenate to significandString
        let significandString = "";
        for (let i = 0; i < stopSearch; ++i) {
            significandString += convertedForm[i];
        }

        // Check if the string includes a "." since "1.26" is a float and not an int like "2"
        this._form.significand = significandString.includes(".")
            ? parseFloat(significandString)
            : parseInt(significandString);

        // Grab last char in string (e.g. the 7 in 1.26e+7) and return a number
        this._form.exponent = parseInt(convertedForm.slice(-1));

        return this._form;
    };
}

export {
    ScientificNotation,
    ScientificNotationConverter,
};
