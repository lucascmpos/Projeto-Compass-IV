const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", e => {
    e.preventDefault();
    let test = [];
    const inputName = document.querySelector('input[name="name"]');
    if (inputName.value.length >= 3) {
        localStorage.setItem("inputNValue", inputName.value);
        test[0] = true
    }

    const inputEmail = document.querySelector('input[name="email"]');
    if (inputEmail.value.length >= 7) {
        localStorage.setItem("inputEValue", inputEmail.value);
        test[1] = true
    } 
    const inputAge = document.querySelector('input[name="age"]');
    if (inputAge.value >= 1) {
        localStorage.setItem("inputAValue", inputAge.value);
        test[2] = true
    }
    if (test[0] == true && test[1] == true && test[2] == true) {
        window.location.href = "./sucesso.html"
    }
        else{
            alert("Please fill the forms below!")
    }
});