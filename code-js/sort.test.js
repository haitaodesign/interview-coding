import { expect, test } from 'vitest'
import { bubbleSort, betterBubbleSort, bestBubbleSort, selectSort, insertSort, mergeSort, quickSort } from './sort'
test('排序算法', function () {
    expect(bubbleSort([2,5,1])).toEqual([1,2,5])
    expect(betterBubbleSort([2,5,1])).toEqual([1,2,5])
    expect(bestBubbleSort([2,5,1])).toEqual([1,2,5])
    expect(selectSort([2,5,1])).toEqual([1,2,5])
    expect(insertSort([2,5,1])).toEqual([1,2,5])
    expect(mergeSort([2,5,1])).toEqual([1,2,5])
    expect(quickSort([2,5,1])).toEqual([1,2,5])
})