var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log('this', this)
    console.log('e', e)
    container.innerHTML = count++;
};


function debounce(func, wait, immediate) {
    var timeout, result;
    return function () {
        var that = this
        var args = arguments
        if (timeout) clearTimeout(timeout)
        if (immediate) {
            var callNow = !timeout
            timeout = setTimeout(() => {
                timeout = null
            }, wait);
            if (callNow) result = func.apply(that, args)
        } else {
            timeout = setTimeout(function () {
                func.apply(that, args)
            }, wait);
        }
    }
}
container.onmousemove = debounce(getUserAction, 1000, true);

// export default debounce