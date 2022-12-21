 
const button = document.getElementById("button");
button.addEventListener("click", e=>{
    e.preventDefault();
    const select = document.getElementById("select");

    console.log(select.value)
});