/**
 * 千分位分隔符
 * @param {number} number 
 * @returns 返回格式化后的字符串
 */
export function numberFormat(number) {
    number = number.toString().split('.')
    var array = number[0].split('').reverse()
    var result = []
    for (let i = 0; i < array.length; i++) {
        if (i !== 0 && i%3 === 0) {
            result.push(',')
        }
        result.push(array[i])
    }
    result.reverse()
    if (number[1]) {
        result = result.join('').concat('.'+ number[1])
    } else {
        result = result.join('')
    }
    return result
}

/**
 * 千分位分隔符 toLocaleString
 * @param {number} number 
 * @returns 返回格式化后的字符串
 */
export function numberFormatByToLocaleString (number) {
    return number.toLocaleString()
}

/**
 * 千分位分隔符，正则实现
 * @param {number} number 
 * @returns 
 */
export function numberFormatByRegExpAndReplace (number) {
    var res = number.toString().replace(/\d+/, function(n) {
        return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
            return $1 + ','
        })
    })
    return res
}