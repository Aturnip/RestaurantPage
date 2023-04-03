
function loadHome() {
    const img = document.createElement("img");
    img.src = "images/home.jpg"
    
    const home = document.createElement("div");
    home.appendChild(img);
    home.classList.add("home");

    

    return home;
}

export {loadHome}