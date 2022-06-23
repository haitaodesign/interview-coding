/**
 * 拍平数组
 * @param {Array} array 
 * @returns 返回数组
 */
export function flat (array) {
    var result = []
    array.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flat(item))
        } else {
            result.push(item)
        }
    });
    return result
}
/**
 * 拍平数组 reduce 实现
 * @param {Array} array 
 * @returns 返回数组
 */
export function flatByReduce (array) {
    return array.reduce((previous, current)=> {
        return previous.concat(Array.isArray(current) ? flatByReduce(current) : current)
    }, [])
}

/**
 * 拍平数组 栈 实现
 * @param {Array} array 
 * @returns 返回数组
 */
export function flatByStack (array) {
    var result = []
    var stack = [].concat(array)
    while(stack.length !== 0) {
        var current = stack.pop()
        if (Array.isArray(current)) {
            stack.push(...current)
        } else {
            current !== undefined && result.unshift(current)
        }
    }
    return result
}