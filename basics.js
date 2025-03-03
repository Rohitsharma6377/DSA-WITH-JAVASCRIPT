// You are given a Bank account having N amount and you are asked to perform ADD(credit) or SUBTRACT(debit) operation of an amount X.
// After the operation print the amount left in the Bank account. If the debit amount is greater than current balance print "Insufficient Funds"(without quotes) and the operation is skipped.


// Problem Constraints
// 1 <= N, X <= 105


// Input Format
// First line contains a single integer N denoting the balance in bank account.
// Next line contains two space separated integers Type and Amount(X).
// If Type == 1, Perform ADD operation.
// If Type == 2, Perform SUBTRACT operation.


// Output Format
// Print Amount in the bank balance after the operation.


// Example Input
// Example Input 1 :
// 1000
// 1 500


// Example Input 2 :
// 1000
// 2 200


// Example Input 3 :
// 1000
// 2 1500


// Example Output
// Example Output 1 :
// 1500


// Example Output 2 :
// 800


// Example Output 3 :
// Insufficient Funds

function bankAmount (amount , type , balance){
    if( type === 1 ){
        let totalbalance = amount + balance;
        console.log(totalbalance);
    }else if (type === 2 && amount < balance){
        let totalbalance = balance - amount;
        console.log(totalbalance);
        }else if (type ===2 && amount > balance){
            console.log("influence balance");
            
        }else{
            console.log("somthing wrong with your inputs ");
        }
        
};


return bankAmount(200 , 1, 300);




// Problem Description
// Write a program to input an integer from user and print 1 if it is odd otherwise print 0.
// Problem Constraints
// 1 <= N <= 1000000


const Check = (n) =>{
    console.log(n % 2 === 0? "0" : "1")
}

Check(23);

// who is minimume

const Checkminimum = (a,b) =>{
    console.log(a < b ? "b is minimum" : "a is minimium")
};

Checkminimum(1,2);


// if you have three conditions
const Checkminimum = (a,b ,c) =>{
    
    let min = a < b ? (a < c ? a : c) : ( c < b ? c : b );
    console.log(`${min} is minimium`);

};

Checkminimum(4,4,4);



const sum = (a) =>{
    let sum = 0;
   for (let i = 2; i <= a; i += 2) {
       sum = sum + i;
       console.log(sum)
   }
};

sum(11);

//multiplation



const multiple= (n)=>{
    for (let i = 0;  i <= 10; i++){
        let table = n*i
        console.log(table);
    }
};

multiple(3);

// sum of total 

const sum=(A) => {
    let total = 0;
    for (let i = 2; i <= A; i += 2) {
        total += i;
    }
    console.log(total);
};

sum(4);