import { add, random_number } from "./Mathematical.js"

console.log(add(-1, 5))
console.log(`Certo: ${add(1, 5)}`)
console.log(add(1, "5"))
//--------------------------------------------------//
console.log(random_number(-1, 5))
console.log(`Certo: ${random_number(1, 5)}`)
console.log(random_number(5, 5))
console.log(random_number("-1", 5))