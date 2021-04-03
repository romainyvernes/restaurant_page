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

            tab.id = `${TAB_NAMES[i].toLowerCase()}-btn`;

            // add bottom red border for selected tab
            if (i === 2) {
                title.textContent = TAB_NAMES[i];
                mainContainer.appendChild(title);

                tab.style.borderBottom = '3px solid red';
                link.style.color = 'rgb(100, 100, 100)';
            }

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
        locationIcon.className = 'fas fa-map-pin';
        location.appendChild(locationIcon);

        const line1Address = document.createElement('span');
        const line2Address = document.createElement('span');
        line1Address.className = 'contact-item';
        line1Address.textContent = '957 Melrose Avenue';
        line2Address.className = 'contact-item';
        line2Address.textContent = 'Los Angeles, CA 90017';
        location.appendChild(line1Address);
        location.appendChild(line2Address);

        contactContainer.appendChild(location);

        // hours
        const hours = document.createElement('section');
        hours.id = 'contact-hours';
        
        const hoursIcon = document.createElement('i');
        hoursIcon.className = 'fas fa-clock';
        hours.appendChild(hoursIcon);

        const line1Hours = document.createElement('span');
        const line2Hours = document.createElement('span');
        line1Hours.className = 'contact-item';
        line2Hours.className = 'contact-item';
        line1Hours.textContent = 'Monday - Saturday, 11:00 am - 10 pm';
        line2Hours.textContent = 'Sundays, Closed';
        hours.appendChild(line1Hours);
        hours.appendChild(line2Hours);

        contactContainer.appendChild(hours);
        
        // phone and email
        const information = document.createElement('section');
        information.id = 'contact-info';


        const phoneContainer = document.createElement('div');
        
        const phoneIcon = document.createElement('i');
        phoneIcon.className = 'fas fa-phone-square-alt';
        phoneContainer.appendChild(phoneIcon);

        const phoneNumber = document.createElement('span');
        phoneNumber.className = 'contact-item';
        phoneNumber.textContent = '(323) 555 - 5555';
        phoneContainer.appendChild(phoneNumber);
        information.appendChild(phoneContainer);


        const emailContainer = document.createElement('div');
        
        const emailIcon = document.createElement('i');
        emailIcon.className = 'fas fa-envelope';
        emailContainer.appendChild(emailIcon);

        const emailAddress = document.createElement('span');
        emailAddress.className = 'contact-item';
        emailAddress.textContent = 'info@chezmarcel.com';
        emailContainer.appendChild(emailAddress);
        information.appendChild(emailContainer);


        contactContainer.appendChild(information);
        mainContainer.appendChild(contactContainer);
    };

    return {render}
})();

export default contact