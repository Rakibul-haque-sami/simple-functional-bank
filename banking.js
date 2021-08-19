
document.getElementById('deposit-button').addEventListener('click', function () {
    //amount deposited
    const depositInput = document.getElementById('deposit-input');//input box deposit amount
    const newDepositAmount = depositInput.value;

    //
    //update deposit balance
    //
    const depositTotal = document.getElementById('deposit-total'); //bilboard showing deposit amount
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);//convert string to number by parseFloat

    depositTotal.innerText = newDepositTotal;

    //
    //update account balance
    //
    const balanceTotal = document.getElementById('balance-total'); //bilboard showing balance amount
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceAmount) + parseFloat(newDepositAmount);//convert string to number by parseFloat

    balanceTotal.innerText = newBalanceTotal;
    //clear the deposit input field
    depositInput.value = '';
})

//
//withdraw balance
//
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear the  input field
    withdrawInput.value = '';

})
