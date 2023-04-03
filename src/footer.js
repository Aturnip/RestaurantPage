
function loadFooter() {
    const footer = document.createElement("footer");

    const textAuthor = document.createElement("p");
    textAuthor.textContent = "Made by Aturnip 2023"

    footer.appendChild(textAuthor);

    return footer;
}

export {loadFooter};