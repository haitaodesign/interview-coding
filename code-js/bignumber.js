export function bigAdd(num1, num2) {
    var maxLength = Math.max(num1.length, num2.length)
    num1 = num1.padStart(maxLength, 0)
    num2 = num2.padStart(maxLength, 0)
    var t = 0
    var f = 0
    var sum = ''
    for (let i = maxLength - 1; i >=0 ; i--) {
        t = parseInt(num1[i]) + parseInt(num2[i]) + f        
        f = Math.floor(t/10)
        sum = t%10 + sum
    }
    if (f == 1) {
        sum = "1" + sum
    }
    return sum
}
