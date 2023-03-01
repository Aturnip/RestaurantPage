function pageLoad() {
    const contentDiv = document.querySelector("div#content");

    let headline = document.createElement("h1");
    headline.textContent = "Welocome to my restaurant!";
    contentDiv.appendChild(headline);

    let image = document.createElement("img");
    image.src = "/home/jakub/repos/RestaurantPage/dist/images/pexels-ash-376464.jpg";
    contentDiv.appendChild(image);

    let about = document.createElement("p");
    about.textContent = "This restaurant is wonderful and so cozy and nice overall!";
    contentDiv.appendChild(about);
}

export {pageLoad};
