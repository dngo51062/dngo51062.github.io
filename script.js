let isOpen = true;

document.getElementById("menu").addEventListener("click", showHide);

function showHide() {
    let sideBar = document.getElementsByClassName("navStyle")[0];
    let content = document.getElementsByClassName("container-content")[0];

    if (isOpen) {
        sideBar.style.display = "none";
        content.style.position = "relative";
        content.style.left = "5vw";
        content.style.width = "75vw";
        isOpen = false;
    } else {
        sideBar.style.display = "block";
        content.style.position = "relative";
        content.style.left = "25vw";
        content.style.width = "65vw";
        isOpen = true;
    }
}
