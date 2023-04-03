import { loadFooter } from "./footer";
import { loadHeader } from "./header";
import { loadNavbar } from "./navbar";
import { loadContent } from "./content";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";


function pageLoad() {
    const mainBody = document.querySelector(".main_body");
    const content = loadContent();
    const home = loadHome();
    const menu = loadMenu();
    const contact = loadContact();

    mainBody.appendChild(loadHeader());
    mainBody.appendChild(loadNavbar());
    mainBody.appendChild(content);
    content.appendChild(home);
    mainBody.appendChild(loadFooter());

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            content.removeChild(content.firstChild);
            if (e.target.textContent === "HOME") {
                content.appendChild(home);
            } else if (e.target.textContent === "MENU") {
                content.appendChild(menu);
            } else {
                content.appendChild(contact);
            }   
        })
    })
}

export {pageLoad};
