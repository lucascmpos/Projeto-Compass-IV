const button = document.getElementById("button");
button.addEventListener("click", e => {
    e.preventDefault();
    let test = [false, false];
    const select = document.querySelector(".selectstatus");
    console.log(select.value);
    if (select.value != "unselected") {
        localStorage.setItem("selectValue", select.value);
        test[0] = true
    }

    const checkedRadio = document.querySelector('input[name="market"]:checked');
    if (checkedRadio != null) {
        localStorage.setItem("radioValue", checkedRadio.value);
        test[1] = true
    }

    if (test[0] == true && test[1] == true) {
        window.location.href = "./pag4.html"
    } else alert("You didn't select the items below!");
});