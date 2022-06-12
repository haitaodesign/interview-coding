/**
 * 二维数组中，每个数字相加的和
 * @param {Array} array 二维数组
 * @returns number
 */
const twoDimensionalSum = (array: Array<any>) => {
    var sum = 0
    var oneArray: Array<number> = []
    // 数组降维
    array.map((item)=>{
        oneArray = oneArray.concat(item)
    })
    // 求和
    sum = oneArray.reduce((previousValue, currentValue) => {
        return previousValue + currentValue
    })
    return sum
}

export default twoDimensionalSum

