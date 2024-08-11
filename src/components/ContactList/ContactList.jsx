// ContactList.jsx

import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <Contact
                    key={id}
                    name={name}
                    number={number}
                    onDelete={() => onDeleteContact(id)} />
            ))}
        </ul>
    );
};

export default ContactList;
