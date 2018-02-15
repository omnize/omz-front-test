import _ from 'lodash';
import Moment from 'moment';
import onmizeImg from './omnize.png';
import contacts from './contacts.json';

document.getElementById('#today').innerText += ` ${Moment()}`;
document.getElementById('omnizeImg').src = omnizeImg;

const contactList = document.getElementById('contactList');

_.map(contacts, (contact) => {
    const contactName = document.createElement('span');
    contactName.innerText = contact.name;

    const contactPhone = document.createElement('span');
    contactPhone.innerText = contact.phone;

    const contactItem = document.createElement('li');
    contactItem.appendChild(contactName);
    contactItem.appendChild(contactPhone);


    contactList.appendChild(contacItem);
});
