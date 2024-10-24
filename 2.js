const isPrimeNumber = function (x){
    if (x <= 1000 && x >= 0){
        if (x < 2){
            return `Число ${x} не является простым`;
        }else if(x === 2 || x === 3 || x === 5 || x === 7){
            return `Число ${x} является простым`;
        }else if (x % 2 === 0 || x % 3 === 0 || x % 5 === 0 || x % 7 === 0) {
            return `Число ${x} не является простым`;
        }else{
            return `Число ${x} является простым`;
        }
    }else{
        return 'Введите значение от 0 до 1000'
    }
}

console.log(isPrimeNumber(999));

