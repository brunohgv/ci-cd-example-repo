const Operations = require('./index.js')

describe('sum tests', () => {
    test('1 + 2 equal 3', () => {
        expect(Operations.sum(1, 2)).toBe(3);
    });
    
    test('1 + -1 equal 0', () => {
        expect(Operations.sum(1, -1)).toBe(0);
    });
});

describe('subtract tests', () => {
    test('1 - 2 equal -1', () => {
        expect(Operations.subtract(1, 2)).toBe(-1);
    });
    
    test('1 - -1 equal 2', () => {
        expect(Operations.subtract(1, -1)).toBe(2);
    });
});

describe('multiply tests', () => {
    test('1 * 2 equal 2', () => {
        expect(Operations.multiply(1, 2)).toBe(2);
    });
    
    test('5 * -5 equal -25', () => {
        expect(Operations.multiply(5, -5)).toBe(-25);
    });
});

describe('divide tests', () => {
    test('5 / -5 equal -1', () => {
        expect(Operations.divide(5, -5)).toBe(-1);
    });
    
    test('5 / 0 equal Infinity', () => {
        expect(Operations.divide(5, 0)).toBe(Infinity);
    });
    
    test('-5 / 0 equal -Infinity', () => {
        expect(Operations.divide(-5, 0)).toBe(-Infinity);
    });
    
    test('5 / 2 equal 2.5', () => {
        expect(Operations.divide(5, 2)).toBe(2.5);
    });
    
    test('10 / -2 equal -5', () => {
        expect(Operations.divide(10, -2)).toBe(-5);
    });
});

