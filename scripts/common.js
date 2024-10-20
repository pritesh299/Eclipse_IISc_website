dropdown_menu=document.getElementById("dropdown_menu")
dropdown_btn=document.getElementById("dropdown_btn")


dropdown_btn.addEventListener("click",()=>{
    dropdown_menu.classList.toggle("d-none");
})

document.addEventListener("click", (event) => {
    if (!dropdown_btn.contains(event.target) && !dropdown_menu.contains(event.target)) {
        dropdown_menu.classList.add("d-none");
    }
});