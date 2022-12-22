const button3 = document.getElementById("button3");
button3.addEventListener("click", e => {
    e.preventDefault();
    const textChecked = document.querySelector('textarea[name="texto"]:checked');
    if (textChecked != null && textChecked.length > 0) {
        localStorage.setItem("textValue", textChecked.value);
        window.location.href = "./pag6.html"
    } else(alert("You didn't write any text!"))
});


