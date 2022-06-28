/**
 * 数组去重
 * @param {Array} array 
 * @returns 返回去重之后的数组
 */
export function unique (array) {
    var res = []
    for (var i = 0; i < array.length; i++) {
        var len = res.length
        for (var j = 0; j < len; j++) {
            if (array[i] === res[j]) {
                break
            }
        }
        if (j === len) {
            res.push(array[i])
        }
    }
    return res
}

/**
 * 数组去重 IndexOf
 * @param {Array} array 
 * @returns 返回数组
 */
export function uniqueByIndexOf (array) {
    var res = []
    for (let i = 0; i < array.length; i++) {
        var current = array[i]
        if (res.indexOf(current) === -1) {
            res.push(current)
        }        
    }
    return res
}

/**
 * 基于排序后的数组去重
 * @param {Array} array 
 * @returns 返回数组
 */
export function uniqueBySorted (array) {
    var res = []
    var arrayBySorted = array.concat().sort()
    var pre
    for (var i = 0; i < arrayBySorted.length; i++) {
        if (!i || pre !== arrayBySorted[i]) {
            res.push(arrayBySorted[i])
        }
        pre = arrayBySorted[i]
    }
    return res
}

/**
 * 数组去重优化版本
 * @param {Array} array 
 * @param {Boolean} isSorted 
 * @returns 返回数组
 */
export function uniqueBySortedAndIndexOf (array, isSorted) {
    var res = []
    var pre
    for (var i = 0; i < array.length; i++) {
        if (isSorted) {
            if (!i || pre !== array[i]) {
                res.push(array[i])
            }
            pre = array[i]
        } else if (res.indexOf(array[i]) === -1) {
            res.push(array[i])
        }
    }
    return res
}