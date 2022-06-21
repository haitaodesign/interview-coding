import { expect, test } from 'vitest'
import { curry3 } from './curry'

test('函数柯里化', function () {
    expect(curry3(1, 2, 3)).toEqual(6)
    expect(curry3(1)(2)(3)).toEqual(6)
})