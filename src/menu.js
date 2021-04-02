const menu = (() => {

    const render = () => {
        const mainContainer = document.querySelector('#content');
        const header = document.createElement('header');
        const title = document.createElement('h1');
        const navbar = document.createElement('ul');

        // handle background image, title, and navigation bar
        mainContainer.style.backgroundImage = "url('./table.jpeg')";

        const TAB_NAMES = ['Home', 'Menu', 'Contact'];
        for (let i = 0; i < TAB_NAMES.length; i++) {
            const tab = document.createElement('li');
            const link = document.createElement('a');

            // add bottom red border for selected tab
            if (i === 1) {
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

        // handle menu area
        const menuContainer = document.createElement('div');
        menuContainer.id = 'menu-container';

        const MENU_SECTIONS = [
            {Entrees: ['6 or 12 snails', 'Endive salad with Roquefort cheese', 
                    'Duck foie gras', 'Leeks with vinaigrette']},
            {Meats: ['Duck confit with shot apples', 'Sautéed veal marengo',
                    'Grilled andouillette with mustard sauce', 'Beef bourguignon']}, 
            {Fish: ['Baked sea bream with virgin sauce', 'Pike quenelle, shellfish coulis']},
            {Sides: ['Mushrooms à la provençale', 'Golden potatoes fried in duck fat',
                    'Alsatian sauerkraut']}, 
            {Cheeses: ['Comté', 'Roquefort blue cheese', 'Camembert', 'Goat cheese']}, 
            {Desserts: ['Crème brulée', 'Île flottante', 'Tiramisu', 'Chocolate éclairs']}
        ];

        MENU_SECTIONS.map(section => {
            const sectionName = Object.keys(section)[0];
            const sectionContainer = document.createElement('section');
            const sectionTitle = document.createElement('h2');

            sectionTitle.textContent = sectionName;
            sectionContainer.appendChild(sectionTitle);

            section[sectionName].map(item => {
                const sectionItem = document.createElement('p');
                sectionItem.textContent = item;
                sectionContainer.appendChild(sectionItem);
            });
            menuContainer.appendChild(sectionContainer);
        });
        
        mainContainer.appendChild(menuContainer);
    };

    return {render}
})();

export default menu