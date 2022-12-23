 const button = document.getElementById("button");
 button.addEventListener("click", e => {
     e.preventDefault();
     let test=[];
     const select = document.querySelector(".select");
     localStorage.setItem("selectValue", select.value);
     if (select.value != "unselected") {
        localStorage.setItem("selectValue", select.value);
        test[0] = true
    } else(alert("You didn't select the items below!"))
     const checkedRadio = document.querySelector('input[name="market"]:checked');
     if (checkedRadio != null) {
        test[1] = true
         localStorage.setItem("radioValue", checkedRadio.value);
     } else(alert("You didn't select the items below!"))



     if (test[0] == true && test[1] == true ) {
        window.location.href = "./pag4.html"
    }
 });