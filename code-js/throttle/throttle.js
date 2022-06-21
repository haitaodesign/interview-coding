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

/**
 * 节流函数，根据定时器方式实现
 * @param {Function} func 
 * @param {number} wait 
 * @returns Function
 */
function throttle2 (func, wait) {
    var timeout, context, args
    return function () {
        context = this
        args = arguments
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                func.apply(context, args)
            }, wait);
        }
    } 
}

// 测试用例
var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log('this', this)
    console.log('e', e)
    container.innerHTML = count++;
};

container.onmousemove = throttle2(getUserAction, 3000);