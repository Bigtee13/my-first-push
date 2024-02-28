let expenseForm = document.getElementById("expenseForm");
let expenseList = document.getElementById("expenseList");

expenseForm.addEventListener("click", addExpense);
function addExpense(event){
    event.preventDefault();

let expenseNameInput = document.getElementById("expenseName");
let expenseAmountInput = document.getElementById("expenseAmount");

const expenseName = expenseNameInput.value;
const expenseAmount = parseFloat(expenseAmountInput.value);

if(expenseName && !isNaN(expenseAmount)){
    let expenseItem = document.createElement("li");
    expenseItem.innerHTML = `
    <span>${expenseName}</span>
    <span>${expenseAmount}</span>
    <button class="delete-btn">Delete</button>
    `

    expenseList.appendChild(expenseItem);

    expenseNameInput.value = "";
    expenseAmountInput.value = "";

     const deleteBtn = document.querySelector(".delete-btn");
     deleteBtn.addEventListener("click", () => {
        expenseItem.remove();
     })

}else{
    // alert("Please input a valid detail");
}
}