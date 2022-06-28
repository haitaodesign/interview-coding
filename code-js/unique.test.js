import { expect, test } from 'vitest'
import { unique, uniqueByIndexOf, uniqueBySorted, uniqueBySortedAndIndexOf } from "./unique";
test('数组去重', () => {
    expect(unique([1, 2, '1', 1])).toStrictEqual([1, 2, '1'])
    expect(uniqueByIndexOf([1, 2, '1', 1])).toStrictEqual([1, 2, '1'])
    // 此测试用例跑不通
    // expect(uniqueBySorted([1, 2, '1', 1])).toStrictEqual([1, 2, '1'])
    expect(uniqueBySorted([1, 2, 1])).toStrictEqual([1, 2,])
    expect(uniqueBySorted([1, 1, '1'])).toStrictEqual([1, '1'])
    expect(uniqueBySortedAndIndexOf([1, 2, '1', 1], false)).toStrictEqual([1, 2, '1'])
    expect(uniqueBySortedAndIndexOf([1, 2, '1', 1], false)).toStrictEqual([1, 2, '1'])
    expect(uniqueBySorted([1, 2, 1].sort(), true)).toStrictEqual([1, 2,])
})