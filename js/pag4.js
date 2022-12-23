const button2 = document.getElementById("button2");
button2.addEventListener("click", e => {
    e.preventDefault();
    let test = [false, false];
    const select2 = document.querySelector(".select2");
    if (select2.value != "unselected") {
        localStorage.setItem("selectValue2", select2.value);
        test[0] = true
    }

    const checkedBoxes = document.querySelectorAll('input[name="resource"]:checked');
    let checkedBoxValues = [];
    checkedBoxes.forEach((checkedBox, index) => {

        checkedBoxValues[index] = checkedBox.value

    });
    if (checkedBoxValues[0] != null) {
        localStorage.setItem("boxValue", checkedBoxValues);
        test[1] = true
    }


    if (test[0] == true && test[1] == true) {
        window.location.href = "./pag5.html"
    } else(alert("You didn't select the items below!"))
});