const printNum = function baz(num1, num2){
    console.log(num1);
    if (num1 < num2){
        setTimeout(baz, 1000, num1 + 1, num2)
    }
}

printNum(4, 8)
