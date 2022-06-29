import { expect, test} from 'vitest'
import { factorialIterative, factorial } from './factorialIterative'
test('阶乘测试', () => {
    expect(factorialIterative(5)).toEqual(120)
    expect(factorial(5)).toEqual(120)
})