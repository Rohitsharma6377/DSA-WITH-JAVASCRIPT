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



// remove on enumber 
function remove(n){
    let val = n % 10;
    console.log(val);
    let cal = (n - val) / 10;
    console.log(cal);
};

console.log(remove(3423));


// reverse the number
function reversenum(num){
    let reversed = 0;
    
    while (num > 0){
        let lastdigit = num % 10;
        reversed = (reversed * 10) +lastdigit;
        num = (num - lastdigit) / 10;
    }
    return reversed;
};

console.log(reversenum(12345))


//total the all digit 
function total(n){
    let sum = 0;
    while (n > 0){
    let lastdigit = n%10;
    sum = sum +lastdigit;
        n = (n-lastdigit)/10;
    }
    console.log(sum);    
};

total(23);
//  sequar of an number
// \are of sewuar

function areaSquar(n){
    let are = n*n;
    console.log(are);
};

areaSquar(2);

// even odd
function oddeven(n){
    console.log(n%2? "odd":"even");
    
}
oddeven(5);

 