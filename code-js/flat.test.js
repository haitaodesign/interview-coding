import { expect, test } from 'vitest'
import { flat, flatByReduce, flatByStack } from './flat'
test('拍平数组', () => {
    expect(flat([1, 3, [4, 5, 9, [1, 2]]])).toStrictEqual([1, 3, 4, 5, 9, 1, 2])
    expect(flatByReduce([1, 3, [4, 5, 9, [1, 2]]])).toStrictEqual([1, 3, 4, 5, 9, 1, 2])
    expect(flatByStack([1, 3, [4, 5, 9, [1, 2]]])).toStrictEqual([1, 3, 4, 5, 9, 1, 2])
} )