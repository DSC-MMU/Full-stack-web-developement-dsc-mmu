//Online shopping using bank card
//current bal  - 
//tax
//Cost of commodity
/**
 * the conditions is: the current balance must be higher than the payableAmount for a
 *  transaction to be successeful
 * and the payable amout and currentbalance must be greater than zero
 * 
 */
let currentBal = 30000;
const tax = 0.5;
let costOfCommodity = 10000;
let payableAmount = costOfCommodity + (costOfCommodity* tax);

//if syntax
if (currentBal > payableAmount && payableAmount > 0 && currentBal> 0){
    //statement to be execited
let remaingBal = currentBal - payableAmount
    console.log(`Your transaction was successful, You paid : `+payableAmount + ` Your Balance is :` +remaingBal)
}else{
    //alternative code to run if the condition is not 
    console.log('Transaction not successful');
}


