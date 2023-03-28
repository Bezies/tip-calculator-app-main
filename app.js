// BLOCK AUTO-RESET REFRESH

const form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault();
}

// PEOPLE 0 
const people = document.querySelector("#number-people");
const error = document.querySelector(".error");

people.addEventListener("change", () => {
    if (people.value === "0") {
        error.classList.replace("error", "error-on");
        people.style.border = "1px solid red";
    } else {
        error.style.display = "none";
        people.style.border = "none";

    }
})


// BILL + TIP 
const bill = document.querySelector("#amount");
const resultTip = document.querySelector("#result-tip")
const resultTotal = document.querySelector("#result-total");
const tip = document.querySelectorAll(".tip");

for (let i = 0; i < tip.length; i++) {
    tip[i].addEventListener("click", () => {
        resultTip.innerHTML = (((tip[i].innerHTML.replace('%', '') * bill.value) / 100) / people.value).toFixed(1);
        resultTotal.innerHTML = ((parseInt(bill.value) / people.value) + (((tip[i].innerHTML.replace('%', '') * bill.value) / 100) / people.value)).toFixed(1);
    })
}


// CUSTOM TIP 
const customTip = document.querySelector("#custom")

customTip.addEventListener("input", () => {
    resultTip.innerHTML = (((customTip.value * bill.value) / 100) / people.value).toFixed(1);
    resultTotal.innerHTML = ((parseInt(bill.value) / people.value) + (((customTip.value * bill.value) / 100) / people.value)).toFixed(1);

})
customTip.addEventListener("click", () => {
    resultTip.innerHTML = (((customTip.value * bill.value) / 100) / people.value).toFixed(1);
    resultTotal.innerHTML = ((parseInt(bill.value) / people.value) + (((customTip.value * bill.value) / 100) / people.value)).toFixed(1);

})

// RESET 

const reset = document.querySelector("#reset")
const totals = document.querySelectorAll(".total")

reset.addEventListener("click", () => {
    totals.forEach(total => {
        total.innerHTML = "0.00"
    })
    
})
