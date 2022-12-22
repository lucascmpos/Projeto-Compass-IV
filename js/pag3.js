 const button = document.getElementById("button");
 button.addEventListener("click", e => {
     e.preventDefault();
     const select = document.querySelector(".select");
     console.log(select.value);
     localStorage.setItem("selectValue", select.value);
     const checkedRadio = document.querySelector('input[name="market"]:checked');
     if (checkedRadio != null) {
         localStorage.setItem("radioValue", checkedRadio.value);
         window.location.href = "./pag4.html"
     } else(alert("You didn't select the items below!"))
 });