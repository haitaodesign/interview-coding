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

/**
 * 节流函数，定时器与时间戳合并版本
 * @param {Function} func 
 * @param {number} wait 
 * @returns Function
 */
function throttle3 (func, wait) {
    var timeout, context, args
    var previous = 0

    var later = function () {
        previous = +new Date()
        timeout = null
        func.apply(context, args)
    }
    var throttled = function () {
        var currentTime = +new Date()
        var remaining = wait - (currentTime - previous)
        context = this
        args = arguments
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = currentTime
            func.apply(context, args)
        } else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }
    }
    return throttled
}

// 测试用例
var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log('this', this)
    console.log('e', e)
    container.innerHTML = count++;
};

container.onmousemove = throttle3(getUserAction, 1000);