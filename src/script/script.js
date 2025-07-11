let scrollPos = 0;
let scrollHeight = 0;
let scrollPosPercentage = 0;
let htmlTag = document.getElementById("html");
let currentBackgroundSize = 1080;

if(sessionStorage.getItem("lightTheme")==null){
    sessionStorage.setItem("lightTheme", "true");
}

if(sessionStorage.getItem("lightTheme")=="true"){
    document.getElementById("themeIcon").src = "./img/moonicon.png";
    document.getElementById("styleTag").href = "./style/style.css";
} else{
    document.getElementById("themeIcon").src = "./img/sunicon.png";
    document.getElementById("styleTag").href = "./style/style_alt.css";
}

function bgScroll() {
    scrollHeight = htmlTag.offsetHeight - htmlTag.clientHeight;
    scrollPos = window.pageYOffset;
    scrollPosPercentage = 100 * scrollPos / scrollHeight
    document.body.style.backgroundPositionY = scrollPosPercentage + "%";
    document.body.style.backgroundPositionX = scrollPosPercentage + "%";
    setTimeout(bgScroll, 1000/60);
}

function themeSwitch(){
    if(sessionStorage.getItem("lightTheme")=="false"){
        document.getElementById("themeIcon").src = "./img/moonicon.png";
        document.getElementById("styleTag").href = "./style/style.css";
        sessionStorage.setItem("lightTheme", "true");
    } else{
        document.getElementById("themeIcon").src = "./img/sunicon.png";
        document.getElementById("styleTag").href = "./style/style_alt.css";
        sessionStorage.setItem("lightTheme", "false");
    }
}

function checkRes(){
    if(htmlTag.clientWidth > htmlTag.clientHeight){
        document.getElementsByTagName('header')[0].style.flexDirection = "row";
        document.getElementsByTagName('header')[0].style.alignItems = "center"
        } else {
        document.getElementsByTagName('header')[0].style.flexDirection = "column";
        document.getElementsByTagName('header')[0].style.alignItems = "center"
    } 
    setTimeout(checkRes, 1000/1);
}

bgScroll();
checkRes();