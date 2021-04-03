const homepage = (() => {

    const render = () => {
        const container = document.querySelector('#content');
        const header = document.createElement('header');
        const title = document.createElement('h1');
        const description = document.createElement('p');
        const navbar = document.createElement('ul');

        container.style.backgroundImage = "url('./restaurant.jpeg')";

        title.textContent = 'Chez Marcel';
        container.appendChild(title);

        const TAB_NAMES = ['Home', 'Menu', 'Contact'];
        for (let i = 0; i < TAB_NAMES.length; i++) {
            const tab = document.createElement('li');
            const link = document.createElement('a');

            tab.id = `${TAB_NAMES[i].toLowerCase()}-btn`;

            // add bottom red border for selected tab
            if (i === 0) {
                tab.style.borderBottom = '3px solid red';
                link.style.color = 'rgb(100, 100, 100)';
            }

            link.href = '#';
            link.textContent = TAB_NAMES[i];

            tab.appendChild(link);
            navbar.appendChild(tab);
        }
        header.appendChild(navbar);
        container.appendChild(header);

        description.id = 'home-description';
        description.textContent = `Savor authentic French cuisine in a typically 
                Parisian decor.`;
        container.appendChild(description);
    };

    return {render}
})();

export default homepage