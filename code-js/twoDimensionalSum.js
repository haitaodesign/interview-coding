/**
 * 二维数组中，每个数字相加的和
 * @param {Array<Array<number>>} array 二维数组
 * @returns number
 */
var twoDimensionalSum = function (array) {
    var sum = 0
    var oneArray = []
    // 数组降维
    array.map(function(item){
        oneArray = oneArray.concat(item)
    })
    // 求和
    sum = oneArray.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    })
    return sum
}

export default twoDimensionalSum

