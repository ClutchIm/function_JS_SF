function getSumFunc(x){
    return function (y){
        return x + y;
    }
}

const internalSum = getSumFunc(4);
const finallySum = internalSum(2);

console.log(finallySum);

