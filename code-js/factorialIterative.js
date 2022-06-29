/**
 * 阶乘迭代实现
 * @param {number} number 
 * @returns 返回数字
 */
export function factorialIterative (number) {
    if (number < 0) return undefined
    var total = 1
    for (var i = number; i > 1 ; i--) {
        total = total * i        
    }
    return total
}

/**
 * 阶乘递归实现
 * @param {number} number 
 * @returns 返回乘后的结果
 */
export function factorial (number) {
    if (number === 0 || number === 1) return 1
    return number * factorial(number - 1)
}