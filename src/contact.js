const contact = (() => {

    const render = () => {
        const mainContainer = document.querySelector('#content');
        const header = document.createElement('header');
        const title = document.createElement('h1');
        const navbar = document.createElement('ul');

        // handle background image, title, and navigation bar
        mainContainer.style.backgroundImage = "url('./statue.jpeg')";

        const TAB_NAMES = ['Home', 'Menu', 'Contact'];
        for (let i = 0; i < TAB_NAMES.length; i++) {
            const tab = document.createElement('li');
            const link = document.createElement('a');

            // add bottom red border for selected tab
            if (i === 2) {
                title.textContent = TAB_NAMES[i];
                mainContainer.appendChild(title);

                tab.style.borderBottom = '3px solid red';
                link.style.color = 'rgb(100, 100, 100)';
            }

            //link.href = `${TAB_NAMES[i].toLowerCase()}.js`;
            link.href = '#';
            link.textContent = TAB_NAMES[i];

            tab.appendChild(link);
            navbar.appendChild(tab);
        }
        header.appendChild(navbar);
        mainContainer.appendChild(header);

        // handle contact area
        const contactContainer = document.createElement('div');
        contactContainer.id = 'contact-container';

        // location
        const location = document.createElement('section');
        const locationIcon = document.createElement('i');
        locationIcon.className = '';
    };

    return {render}
})();

export default contact