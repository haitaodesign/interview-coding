/**
 * 基本冒泡排序算法
 * @param {Array<number>} array 
 * @returns 
 */
export function bubbleSort (array) {
    const len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array
}

/**
 * 改进版冒泡排序，排除一些不必要的对比
 * @param {Array<number>} array 
 * @returns 
 */
export function betterBubbleSort (array) {
    const len = array.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array
}

/**
 * 最优版冒泡排序，第一次冒泡的时候定位到数据是否有序，减少判断逻辑
 * @param {Array<number>} array 
 * @returns 
 */
export function bestBubbleSort (array) {
    const len = array.length
    let flag = false
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                flag = true
            }
        }
        if (flag === false) return array
    }
    return array
}
/**
 * 选择排序
 * @param {Array<number>} array 
 */
export function selectSort (array) {
    const len = array.length
    let minIndex

    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i; j < len; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }
    return array
}
/**
 * 插入排序算法
 * @param {Array<number>} array 
 * @returns 
 */
export function insertSort (array) {
    const len = array.length
    let temp

    for (let i = 1; i < len; i++) {
        let j = i
        temp = array[i]
        while(j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1]
            j--
        }
        array[j] = temp  
    }
    return array
}
/**
 * 归并排序
 * @param {Array<number>} array 
 * @returns Array<number>
 */
export function mergeSort (array) {
    const len = array.length
    if (len <= 1) {
        return array
    }
    const middle = Math.floor(len / 2)
    const leftArray = mergeSort(array.slice(0, middle))
    const rightArray = mergeSort(array.slice(middle, len))
    array = mergeArray(leftArray, rightArray)
    return array
}

/**
 * 合并两个数组
 * @param {Array<number>} arrayOne 
 * @param {Array<number>} arrayTwo 
 * @returns Array<number>
 */
function mergeArray (arrayOne, arrayTwo) {
    let i = 0, j = 0
    const res = []
    const lengthOne = arrayOne.length
    const lengthTwo = arrayTwo.length
    while (i < lengthOne && j < lengthTwo) {
        if (arrayOne[i] < arrayTwo[j]) {
            res.push(arrayOne[i])
            i++
        } else {
            res.push(arrayTwo[j])
            j++
        }
    }
   
    if (i < lengthOne) {
        return res.concat(arrayOne.slice(i))
    } else {
        return res.concat(arrayTwo.slice(j))
    }
}