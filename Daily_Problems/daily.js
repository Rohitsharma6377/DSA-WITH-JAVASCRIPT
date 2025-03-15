//remove last specific digits


const removeDigit = (n,d)=>{
    let result = 0;
    let multiple = 1;
    while (n>0){
        let digit = n % 10;
        if(digit != d){
            result = result + digit * multiple;
            multiple = multiple*10;
        }
        n = (n-digit)/10;
    }
    return result;
};

console.log(removeDigit(234,3));

