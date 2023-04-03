
function loadNavbar() {
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const profileButton = document.createElement("button");
    profileButton.textContent = "HOME";
    navbar.appendChild(profileButton);
    
    const menuButton = document.createElement("button");
    menuButton.textContent = "MENU";
    navbar.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.textContent = "CONTACT";
    navbar.appendChild(contactButton);


    return navbar;
}

export {loadNavbar};