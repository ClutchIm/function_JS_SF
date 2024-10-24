let array = [1, 2, 0, 3, 4, 0, 5, 6, 'x', null, true, 2];

let even = 0
let odd = 0
let zero = 0

function evenCalc(array){
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number'){
            if (array[i] === 0){
                zero++
            }else if (array[i] % 2 === 0){
                even++
            }else if (array[i] % 2 === 1){
                odd++
            }
        }
    }

    return `Нулей - ${zero}; четных - ${even}; нечетных - ${odd}`;
}

console.log(evenCalc(array))
