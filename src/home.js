const homepage = (() => {

    const render = () => {
        const container = document.querySelector('#content');
        const header = document.createElement('header');
        const title = document.createElement('h1');
        const description = document.createElement('p');
        const navbar = document.createElement('ul');

        title.textContent = 'Chez Marcel';
        container.appendChild(title);

        const TAB_NAMES = ['Home', 'Menu', 'Contact'];
        for (let i = 0; i < TAB_NAMES.length; i++) {
            const tab = document.createElement('li');
            const link = document.createElement('a');

            //link.href = `${TAB_NAMES[i].toLowerCase()}.js`;
            link.href = '#';
            link.textContent = TAB_NAMES[i];

            tab.appendChild(link);
            navbar.appendChild(tab);
        }
        header.appendChild(navbar);
        container.appendChild(header);

        description.textContent = `Savor authentic French cuisine in a typically 
                Parisian decor.`;
        container.appendChild(description);
    };

    return {render}
})();

export default homepage