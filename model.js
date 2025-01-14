import { less, solveLinearEquation, PI } from "./Mathematical.js"

console.log(less(-1, 5))
console.log(`Certo: ${less(5, 1)}`)
console.log(less(1, "5"))
/* PI */
console.log(PI(-5))
console.log(PI("A"))
console.log(`Certo: ${PI()}`)
/* Equações */
console.log(solveLinearEquation("2x + 1 = 21"))