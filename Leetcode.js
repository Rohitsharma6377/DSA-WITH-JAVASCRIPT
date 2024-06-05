// Q.1 Create a function to sum all netural number from 1 to n
{{

    
    function sumOfnaturalNumber(num){
        let sum = 0;
        for(let i=1; i<=num; i++){
            sum += i;
            
        }
        return sum;
    }
    console.log(sumOfnaturalNumber(3))
    console.log(sumOfnaturalNumber(30)) 

// Q.2 sum of digits of a number


    
    function sumOfDigitsNumber(num){
        let num =0;
        while(num>0){
            sum += num%10;
            num = Math.floor(num / 10);
        return sum;
        }
        
    }
   console.log( sumOfDigitsNumber(2323))
   
   
}}