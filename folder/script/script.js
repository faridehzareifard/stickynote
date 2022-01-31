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

function showfonticon() {
    let fonticon = document.getElementById("fonticon");
    fonticon.classList.add("showfonticon");

}

function hidefonticon() {
    let fonticon = document.getElementById("fonticon");
    fonticon.classList.remove("showfonticon");
}