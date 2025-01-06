export function random_number(a = 1, b=10) {
    if (a < 0) {
        console.log("Logical error: There is no way the minimum can be less than 0!")
        return("Logical error: There is no way the minimum can be less than 0!")
    } else if (b <= a) {
        console.log("Logical error: There is no way the maximum can be less than or equal to the minimum!")
        return("Logical error: There is no way the maximum can be less than or equal to the minimum!")
    } else {
        let randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
        return randomNum; // Retorna o número aleatório gerado
    }
}