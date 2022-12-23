const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", e => {
    e.preventDefault();
    const text = document.querySelector('textarea[name="texto"]');
    if (text.value.length >= 5) {
        localStorage.setItem("textValue", text.value);
        window.location.href = "./pag6.html"
    } else(alert("You didn't write any text!"))
});