var version = 2.0

export function random_number(a = 1, b=10) {
    if (a < 0 || b < 0) {
        console.log("(MathematicalJS)Logical error: There is no way the minimum can be less than 0!")
        return("(MathematicalJS)Logical error: There is no way the minimum can be less than 0!")
    } else if (b <= a) {
        console.log("(MathematicalJS)Logical error: There is no way the maximum can be less than or equal to the minimum!")
        return("(MathematicalJS)Logical error: There is no way the maximum can be less than or equal to the minimum!")
    } else if (typeof(a) != "number" || typeof(b) != "number") {
        console.log("(MathematicalJS)Data Type error: There is no way to get random number of two NaN")
        return("(MathematicalJS)Data Type error: There is no way to get random number of two NaN")
    } else {
        let randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
        return randomNum; // Retorna o número aleatório gerado
    }
}

export function add(a = 1, b = 1) {
    if (a < 0 || b < 0) {
        console.log(`(MathematicalJS)Negative numbers error: In Mathematical.js ${version} we do not handle numbers smaller than 0!`)
        return(`(MathematicalJS)Negative numbers error: In Mathematical.js ${version} we do not handle numbers smaller than 0!`)
    } else if (typeof(a) != "number" || typeof(b) != "number") {
        console.log("(MathematicalJS)Data Type error: There is no way to add two NaN")
        return("(MathematicalJS)Data Type error: There is no way to add two NaN")
    } else {
        var result = a + b
        return result
    }
}