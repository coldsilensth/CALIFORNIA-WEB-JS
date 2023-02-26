const form = document.getElementById("modal-box") 
 
const inputs = document.querySelectorAll(".modal-box__input") 
 
const textarea = document.querySelector(".modal-box__textarea") 
 
const nameText = document.querySelector(".modal-box__name-validation") 
 
 
form.addEventListener("submit", (e) => { 
    e.preventDefault() 
 
    let validationCheck = { 
        name: true, 
        phone: true 
    } 
 
    const regNameLat = /[A-Za-z]/ 
 
    const regNameKir = /[A-Яа-я]/ 
 
    const regPhone = /^[0]{1}[1-9]{1}[0-9]{8}$/ 
 
    if(regNameLat.test(inputs[0].value) || regNameKir.test(inputs[0].value)){ 
        nameText.classList.add("modal-box__name-validation") 
        validationCheck.name = true 
    }else{ 
        nameText.classList.remove("modal-box__name-validation") 
        validationCheck.name = false 
    } 
 
    let data = { 
        name: inputs[0].value, 
        info: textarea.value 
    } 
 
    if(validationCheck.name && validationCheck.phone){   
        inputs[0].value = "" 
        textarea.value = "" 
    } 
 
})