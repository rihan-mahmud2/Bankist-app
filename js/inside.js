document.getElementById("btn-deposit").addEventListener("click", function () {
  const text = document.getElementById("text-field");
  const totalBalaceField = document.getElementById("total-balance");
  const currentDepositElement = document.getElementById("deposit-amount");
  const textValue = text.value;
  const currentDeposit = currentDepositElement.innerText;
  const totalBalace = totalBalaceField.innerText;
  currentDepositElement.innerText =
    parseInt(textValue) + parseInt(currentDeposit);
  totalBalaceField.innerText =
    parseFloat(totalBalace) + parseFloat(currentDeposit);
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawElement = document.getElementById("withdraw-input");
  const displayWithdraw = document.getElementById("withdraw-field");
  const totalBalaceField = document.getElementById("total-balance");
  const withdrawValue = withdrawElement.value;
  const totalBalace = totalBalaceField.innerText;
  const currentWithdraw = displayWithdraw.innerText;
  withdrawElement.innerText = "";
  if (isNaN(withdrawValue)) {
  alert('Provide a valid number')
    return
  
  }
  if (parseFloat(withdrawValue) > parseFloat(totalBalace)) {
    alert("Your balance is not sufficient");
    return;
  }

  totalBalaceField.innerText =
    parseFloat(totalBalace) - parseFloat(withdrawValue);
  displayWithdraw.innerText =
    parseFloat(withdrawValue) + parseFloat(currentWithdraw);
});
