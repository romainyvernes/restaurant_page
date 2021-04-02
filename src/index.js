import homepage from './home'
import menu from './menu'
import contact from './contact'

function clearContainer() {
    const container = document.querySelector('#content');
    // loop through child nodes until no child node
}

window.onload = (event) => {
    homepage.render();
};

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const contactBtn = document.querySelector('#contact-btn');

homeBtn.addEventListener('click', (event) => {
    clearContainer();
    homepage.render();
})

menuBtn.addEventListener('click', (event) => {
    clearContainer();
    homepage.render();
})

contactBtn.addEventListener('click', (event) => {
    clearContainer();
    homepage.render();
})