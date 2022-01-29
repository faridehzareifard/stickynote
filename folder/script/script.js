function changetoshow() {
    let click = document.getElementById("click")
    let pluspage = document.getElementById("plus-page");
    console.log(pluspage)

    pluspage.classList.add("show")


}

function changetohide() {
    let pluspage = document.getElementById("plus-page");
    pluspage.classList.remove("show")

}