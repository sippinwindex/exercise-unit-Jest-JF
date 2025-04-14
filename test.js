const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

describe('Currency Conversion Functions', () => {
    test('1 Dollar should equal 146.5 Japanese Yen', () => {
        expect(fromDollarToYen(1)).toBeCloseTo(146.5, 1);
    });

    test('1 Euro should equal 1.07 US Dollars', () => {
        expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
    });

    test('156.5 Yen should equal 0.87 British Pounds', () => {
        expect(fromYenToPound(156.5)).toBeCloseTo(0.87);
    });
});