import { FizzBuzz } from '../src/FizzBuzz'

describe('FizzBuzz', () => {
    it('should return 1 as String when a 1 is given', () => {
    const example = new FizzBuzz()

    expect(example.calculate(1)).toBe("1")
    })

    it('should return 2 as String when a 2 is given', () => {
        const example = new FizzBuzz()

        expect(example.calculate(2)).toBe("2")
    })
})
