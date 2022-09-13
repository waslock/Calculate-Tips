let calculate = document.getElementById(`calculate`)
let result;

calculate.onclick = calculator

function calculator(){
    let amount = document.getElementById(`input`).value
    amount = Number(amount);
    let percent = document.getElementById(`tipPercentage`).value
    percent = Number(percent);
    result = ((percent/100)*amount)
    result = Math.round(result)
    document.getElementById(`result`).innerHTML = `Tip: $${result}`
}