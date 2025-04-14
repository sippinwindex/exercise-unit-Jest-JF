// const sum = (a,b) => {
//     return a + b
// }
// console.log(sum(7,3))

// module.exports = { sum };

const oneEuroIs = {
    JPY: 156.755, // Japan Yen (adjusted for 146.5)
    USD: 1.07,    // US Dollar
    GBP: 0.87     // British Pound
};

// Function to convert dollars to yen
function fromDollarToYen(dollarAmount) {
    return dollarAmount * (1 / oneEuroIs.USD) * oneEuroIs.JPY;
}

// Function to convert euros to dollars
function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs.USD;
}

// Function to convert yen to pounds
function fromYenToPound(yenAmount) {
    return yenAmount * (1 / oneEuroIs.JPY) * oneEuroIs.GBP;
}

module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};