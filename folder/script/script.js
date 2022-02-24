//show and hide plus page//
let circle = document.querySelector("#circle");
let pluspage = document.querySelector("#plusPageBox");
let plus = document.querySelector("#plus");
let backButton = document.querySelector("#back-button");
let donebutton = document.querySelector("#donebutton");
circle.addEventListener("click", changetoshow);
backButton.addEventListener("click", changetohide);
donebutton.addEventListener("click", changetohide);

function changetoshow() {
    plus.classList.add("plusRotate");

    pluspage.classList.add("show");
}

function changetohide() {
    pluspage.classList.remove("show");

    plus.classList.remove("plusRotate");
}
//payane show and hide plus page//

//tanzimate font plus page//
function alignToRight() {
    let plustext = document.querySelector("#plustext");
    plustext.classList.add("alignToRight");
    plustext.classList.remove("alignToLeft");
}

function alignToLeft() {
    let plustext = document.querySelector("#plustext");
    plustext.classList.add("alignToLeft");
    plustext.classList.remove("alignToRight");

    //change to bold//
}
let bold = document.querySelector("#bold");
let plustext = document.querySelector("#plustext");
bold.addEventListener("click", fontWeight);

function fontWeight() {
    if (plustext.classList.contains("fontWeight")) {
        plustext.classList.remove("fontWeight");
    } else {
        plustext.classList.add("fontWeight");
    }
}

//change to italic//
let italic = document.querySelector("#italic");

italic.addEventListener("click", fontStyle);

function fontStyle() {
    if (plustext.classList.contains("fontStyle")) {
        plustext.classList.remove("fontStyle");
    } else {
        plustext.classList.add("fontStyle");
    }
}

//payane change to italic//
//payane tanzimate font plus page//
//---------------------------------------------------------------------------//
//tanzimate show and hide setting//
let settingBtn = document.querySelector("#setting");
let subSetting = document.querySelector("#sub-setting");
subSetting.classList.add("hidden");
let bodyElement = document.querySelector("body");
settingBtn.addEventListener("click", toggleSetting);
bodyElement.addEventListener("click", hideSettingByBody);

function toggleSetting() {
    if (subSetting.classList.contains("show")) {
        hideSetting();
    } else {
        showSetting();
    }
}

function showSetting() {
    subSetting.classList.remove("hidden");
    subSetting.classList.add("show");
}

function hideSetting() {
    subSetting.classList.remove("show");
    subSetting.classList.add("hidden");
}

function hideSettingByBody(e) {
    if (e.target != settingBtn && e.target != subSetting) hideSetting();
}
// payane tanzimate show and hide setting//
//-----------------------------------------------------------------------------//
//tanzimate show and hide square//
let squareBtn = document.querySelector("#square");
let subSquare = document.querySelector("#subSquare");
subSquare.classList.add("hidden");

squareBtn.addEventListener("click", toggleSquare);
bodyElement.addEventListener("click", hideSquareByBody);

function toggleSquare() {
    if (subSquare.classList.contains("show")) {
        hideSquare();
    } else {
        showSquare();
    }
}

function showSquare() {
    subSquare.classList.remove("hidden");
    subSquare.classList.add("show");
}

function hideSquare() {
    subSquare.classList.remove("show");
    subSquare.classList.add("hidden");
}

function hideSquareByBody(e) {
    if (e.target != squareBtn && e.target != subSquare) hideSquare();
}
// payane tanzimate show and hide square//
//-----------------------------------------------------------------------------//
//tarikh//
let date = new Date();

let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();

//tabdil miladi be shamsi//

function miladi(y, m, d) {
    const date = new Date(Date.UTC(y, m, d));
    const faDate = new Intl.DateTimeFormat("fa", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    }).format(date);

    document.querySelector("#showDate").innerHTML = faDate;
}
miladi(y, m, d);

//payane tarikh//
//----------------------------------------------------------------------------------//
//change theme color to maat//
// let changetheme = document.querySelector("#changeColor");
// changetheme.addEventListener("click", changeColor);

// function changeColor() {
//     let textarea = document.querySelectorAll(".main textarea");
//     let textarea1 = document.querySelector("#text1");
//     let textarea2 = document.querySelector("#text2");
//     let textarea3 = document.querySelector("#text3");
//     let textarea4 = document.querySelector("#text4");
//     let textarea5 = document.querySelector("#text5");
//     let textarea6 = document.querySelector("#text6");
//     let footerColor1 = document.querySelector("#footer");
//     let circleColor = document.querySelector("#circle");
//     circleColor.classList.remove("footerColor");
//     circleColor.classList.add("bgColorToGray");

//     footerColor1.classList.remove("footerColor");
//     footerColor1.classList.add("bgColorToGray");
//     footerColor1.classList.add("footerColorBorder");

//     textarea1.classList.remove(".areaColor1");
//     textarea2.classList.remove(".areaColor2");

//     textarea3.classList.remove(".areaColor3");
//     textarea4.classList.remove(".areaColor4");
//     textarea5.classList.remove(".areaColor5");
//     textarea6.classList.remove(".areaColor6");

//     textarea.forEach((item) => {
//         item.classList.add("bgColorToGray");
//     });
// }
//payane change theme color to maat//

//change theme to pastili//

// let changethemeToPastil = document.querySelector("#changeColorToPastil");
// changethemeToPastil.addEventListener("click", changeColorToPastil);

// function changeColorToPastil() {
//     let textarea = document.querySelectorAll(".main textarea");
//     let textarea1 = document.querySelector("#text1");
//     let textarea2 = document.querySelector("#text2");
//     let textarea3 = document.querySelector("#text3");
//     let textarea4 = document.querySelector("#text4");
//     let textarea5 = document.querySelector("#text5");
//     let textarea6 = document.querySelector("#text6");
//     let footerColor1 = document.querySelector("#footer");
//     let circleColor = document.querySelector("#circle");
//     circleColor.classList.remove("bgColorToGray");
//     circleColor.classList.add("footerColor");
//     footerColor1.classList.remove("bgColorToGray");
//     footerColor1.classList.remove("footerColorBorder");

//     footerColor1.classList.add("footerColor");
//     textarea.forEach((item) => {
//         item.classList.remove("bgColorToGray");
//     });

//     textarea1.classList.add(".areaColor1");
//     textarea2.classList.add(".areaColor2");

//     textarea3.classList.add(".areaColor3");
//     textarea4.classList.add(".areaColor4");
//     textarea5.classList.add(".areaColor5");
//     textarea6.classList.add(".areaColor6");
// }

//payane change theme to pastili//
//-------------------------------------------------------------------------------//

//about me//

let subAbout = document.querySelector("#subAbout");
let aboutBtn = document.querySelector("#aboutBtn");
subAbout.classList.add("hidden");
aboutBtn.addEventListener("click", showSubAbout);
let closeAboutBtn = document.querySelector("#closeAbout");

closeAboutBtn.addEventListener("click", hideSubAbout);

function showSubAbout() {
    subAbout.classList.remove("hidden");
    subAbout.classList.add("show");
}

function hideSubAbout() {
    subAbout.classList.remove("show");
    subAbout.classList.add("hidden");
}

//close about//