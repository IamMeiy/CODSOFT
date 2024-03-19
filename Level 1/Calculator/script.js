const ul = document.getElementsByName("ul")

ul.addEventListener("click", (event) => {
    console.log(event.target.id);
})
