import { expect, test } from 'vitest'
import { bigAdd } from './bignumber'
test('大数相加', () => {
    expect(bigAdd('9007199254740991', '1234567899999999999')).toBe('1243575099254740990')
})