const button4 = document.getElementById("button4");
button4.addEventListener("click", e => {
    e.preventDefault();
    const checkedText = document.querySelector('input[name="name"]:checked');
    if (checkedText != null) {
        localStorage.setItem("textValue", checkedText.value);
        window.location.href = "./pag1.html"
    } else(alert("You didn't select the items below!"))
});