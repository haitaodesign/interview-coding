/**
 * 浅拷贝
 * @param {any} obj 
 */
export function shallowClone (obj) {
    if (typeof obj !== 'object') return
    var newObj = obj instanceof Array ? [] : {}
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj
}

/**
 * 深拷贝
 * @param {any} obj 
 */
 export function deepClone (obj) {
    if (typeof obj !== 'object') return
    var newObj = obj instanceof Array ? [] : {}
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]): obj[key];
        }
    }
    return newObj
}