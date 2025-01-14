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

export function less(a = 1, b = 1) {
    if (a < 0 || b < 0) {
        console.log(`(MathematicalJS)Negative numbers error: In Mathematical.js ${version} we do not handle numbers smaller than 0!`)
        return(`(MathematicalJS)Negative numbers error: In Mathematical.js ${version} we do not handle numbers smaller than 0!`)
    } else if (typeof(a) != "number" || typeof(b) != "number") {
        console.log("(MathematicalJS)Data Type error: There is no way to less two NaN")
        return("(MathematicalJS)Data Type error: There is no way to less two NaN")
    } else {
        var result = a - b
        return result
    }
}

export function solveLinearEquation(equation) {
    // Remove espaços em branco
    equation = equation.replace(/\s+/g, '');

    // Divide a equação em dois lados
    const [leftSide, rightSide] = equation.split('=');
    
    // Regex para encontrar os coeficientes a e b
    const regex = /([+-]?\d*\.?\d*)x([+-]\d*\.?\d*)?/;
    const leftMatch = leftSide.match(regex);
    const rightValue = parseFloat(rightSide);

    if (!leftMatch) {
        throw new Error("Invalid equation");
    }

    // Coeficiente a
    let a = leftMatch[1] === '' || leftMatch[1] === '+' ? 1 : leftMatch[1] === '-' ? -1 : parseFloat(leftMatch[1]);
    
    // Coeficiente b
    let b = leftMatch[2] ? parseFloat(leftMatch[2]) : 0;

    // Resolve a equação ax + b = c
    const x = (rightValue - b) / a;

    return x;
}

// Exemplo de uso
console.log(solveLinearEquation("2x + 1 = 5")); // Saída: 2

export function PI(quanty = 2) {
    if (quanty < 0) {
        console.log(`(MathematicalJS)Negative numbers error: In Mathematical.js ${version} we do not handle numbers smaller than 0!`)
        return(`(MathematicalJS)Negative numbers error: In Mathematical.js ${version} we do not handle numbers smaller than 0!`)
    } else if (typeof(quanty) != "number") {
        console.log("(MathematicalJS)Data Type error: There is no way to return a PI houses with NaN")
        return("(MathematicalJS)Data Type error: There is no way to return a PI houses with NaN")
    } else {
    let pi = 0;
    const iterations = Math.pow(10, quanty); // Número de iterações para maior precisão

    for (let x = 0; x < iterations; x++) {
        pi += (4 * Math.pow(-1, x)) / (2 * x + 1);
    }

    // Arredonda o resultado para a quantidade de casas decimais desejadas
    return parseFloat(pi.toFixed(quanty));
    }
}