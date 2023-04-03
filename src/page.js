import { loadFooter } from "./footer";
import { loadHeader } from "./header";
import { loadNavbar } from "./navbar";


function pageLoad() {
    const mainBody = document.querySelector(".main_body");

    const contentBody = document.createElement("div");
    contentBody.classList.add("content")

    mainBody.appendChild(loadHeader());
    mainBody.appendChild(loadNavbar());
    mainBody.appendChild(contentBody);
    mainBody.appendChild(loadFooter());
}

export {pageLoad};
