let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value; 
    if (current == 'dark'){
        document.querySelector('body').setAttribute("class","dark");
        document.querySelector('img').setAttribute("src", "byui-logo_white.png");
    } else {
        document.querySelector('body').removeAttribute("class");
        document.querySelector('img').setAttribute("src", "byui-logo_blue.webp");
    }
}