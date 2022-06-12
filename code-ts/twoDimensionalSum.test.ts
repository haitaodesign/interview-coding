import { expect, test } from 'vitest'
import twoDimensionalSum from './twoDimensionalSum.js'
test('二维数组求和', function () {
    expect(twoDimensionalSum([[1,2,3],[2,3,4]])).toBe(15)
})