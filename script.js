//function for getting input value

function getInput(inputId) {
  const input = document.getElementById(inputId);
  const currentAmount = parseFloat(input.value);
  input.value = "";
  return currentAmount;
}

//function for updating diposit & withdraw total amount

function upadatTotalFeild(id, inputValue) {
  const total = document.getElementById(id);
  const totalText = total.innerText;
  const previousTotal = parseFloat(totalText);
  total.innerText = previousTotal + inputValue;
}

//get current balence
function getCurrentBalence() {
  const balenceTotal = document.getElementById("total");
  const balenceTotalText = balenceTotal.innerText;
  const previousBalenceToal = parseFloat(balenceTotalText);
  return previousBalenceToal;
}

//function for update balence

function updateBalence(amount, isTrue) {
  const balenceTotal = document.getElementById("total");
  const previousBalenceToal = getCurrentBalence();
  if (isTrue == true) {
    balenceTotal.innerText = previousBalenceToal + amount;
  } else {
    balenceTotal.innerText = previousBalenceToal - amount;
  }
}

document.getElementById("diposit-btn").addEventListener("click", function () {
  const inputValue = getInput("diposit-amount");
  if (inputValue > 0) {
    upadatTotalFeild("diposite", inputValue);
    updateBalence(inputValue, true);
  } else {
    alert("Please enter valid amount");
  }
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const inputValue = getInput("withdraw-amount");
  const currentBalence = getCurrentBalence();

  if (inputValue > 0 && inputValue < currentBalence) {
    upadatTotalFeild("withdraw", inputValue);
    updateBalence(inputValue, false);
  } else {
    alert("Please enter valid amount");
  }
});
