import homepage from './home'
import menu from './menu'
import contact from './contact'

function clearContainer() {
    const container = document.querySelector('#content');
    let firstChild = container.firstElementChild;

    while (firstChild) {
        firstChild.remove();
        firstChild = container.firstElementChild;
    }
}

function assignEvents() {
    const homeBtn = document.querySelector('#home-btn');
    const menuBtn = document.querySelector('#menu-btn');
    const contactBtn = document.querySelector('#contact-btn');

    homeBtn.addEventListener('click', (event) => {
        clearContainer();
        homepage.render();
        assignEvents();
    });

    menuBtn.addEventListener('click', (event) => {
        clearContainer();
        menu.render();
        assignEvents();
    });

    contactBtn.addEventListener('click', (event) => {
        clearContainer();
        contact.render();
        assignEvents();
    });
}

window.onload = (event) => {
    homepage.render();
    assignEvents();
};