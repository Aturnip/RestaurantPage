function loadMenu() {
    const img = document.createElement("img");
    img.src = "images/menu.jpg"

    const menu = document.createElement("div");
    menu.appendChild(img);
    menu.classList.add("menu");

    

    return menu;
}

export {loadMenu}