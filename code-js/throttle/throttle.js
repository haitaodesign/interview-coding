/**
 * 节流函数，根据时间戳方式实现
 * @param {Function} func 
 * @param {number} wait 
 * @returns Function
 */
function throttle (func, wait) {
    var context, args
    var startTime = 0
    return function () {
        var currentTime = +new Date()
        context = this
        args = arguments
        if (currentTime - startTime > wait) {
            func.apply(context, args)
            startTime = currentTime
        }
    }
}