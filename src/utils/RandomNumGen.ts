// Grab a random integer between 2 value, inclusive
// getRandomInt(1, 4) ==> return random number from 1-4
const getRandomInt = (min: number, max: number): number => {
    const INCLUSIVE_MAX = 1;

    return Math.floor(Math.random() * (max - min + INCLUSIVE_MAX) + min);
};

// Grab a random float between 2 values, min = inclusive, max = exclusive
// getRandomDecimal(1 , 4) ==> return random number from 1.0-3.9
const getRandomDecimal = (min: number, max: number): number => {
    const ONE_DECIMAL_PLACE = 10;

    const randomDecimal = Math.random() * (max - min) + min;
    return Math.floor(randomDecimal * ONE_DECIMAL_PLACE) / ONE_DECIMAL_PLACE;
};

export { getRandomInt, getRandomDecimal };
