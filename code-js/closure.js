// var scope = 'global scope'
// function checkscope () {
//     var scope = 'local scope'
//     function f () {
//         console.log('scope', scope)
//         return scope
//     }
//     return f
// }
// var foo = checkscope()
// foo()

// var data = []
// for (var i = 0; i < 3; i++) {
//     data[i] = function () {
//         console.log(i)
//     }    
// }

// 闭包
// var data = []
// for (var i = 0; i < 3; i++) {
//     data[i] = (function (i) {
//         return function () {
//             console.log(i)
//         }
//     })(i)
// }

// let
var data = []
for (let i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i)
    }    
}
data[0]()
data[1]()
data[2]()