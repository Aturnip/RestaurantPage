function loadContact() {
    const img = document.createElement("img");
    img.src = "images/contact.jpg"

    const contact = document.createElement("div");
    contact.appendChild(img);
    contact.classList.add("contact");

    

    return contact;
}

export {loadContact}