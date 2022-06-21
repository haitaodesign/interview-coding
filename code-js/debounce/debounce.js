var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log('this', this)
    console.log('e', e)
    container.innerHTML = count++;
};


function debounce(func, wait) {
    var timeout;
    return function () {
        var that = this
        var args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            func.apply(that, args)
        }, wait);
    }
}
container.onmousemove = debounce(getUserAction, 1000);

// export default debounce