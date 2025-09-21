// First line contains a single integer N denoting the balance in bank account.
// Next line contains two space separated integers Type and Amount(X).
// If Type == 1, Perform ADD operation.
// If Type == 2, Perform SUBTRACT operation.

const bankAmount = (N, A,T) =>{
    let total = 0 ;
    if(T===1){
        let total = N + A ;
        console.log(total);
    }  
    else if (T===2 ){
        if(N < A){
            let total = A - N ;
            console.log(total);
        }
        else{
            console.log("infulent balance");
        }

    }

}
bankAmount(3,2,2);


//Q2