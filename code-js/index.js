import twoDimensionalSum from './twoDimensionalSum.js'
import { curry3 } from './curry.js'

twoDimensionalSum([[1,2,3], [2,3,4]])

const sum = curry3(1,2,3)
const sum2 = curry3(1)(2)(3)
console.log('sum', sum)
console.log('sum2', sum2)