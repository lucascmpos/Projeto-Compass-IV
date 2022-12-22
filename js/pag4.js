const button2 = document.getElementById("button2");
button2.addEventListener("click", e => {
    e.preventDefault();
    const select2 = document.querySelector(".select2");
    localStorage.setItem("selectValue2", select2.value);
    const checkedBox = document.querySelector('input[name="resource"]:checked');
    if (checkedBox != null) {
        localStorage.setItem("boxValue", checkedBox.value);
        window.location.href = "./pag5.html"
    } else(alert("You didn't select the items below!"))
});