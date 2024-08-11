// Contract.jsx
import clsx from "clsx";
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
    const contactStyles = clsx(styles.contact, 'contact');
    // const contactInfoStyles = clsx(styles.contactInfo, 'contactInfo');
    const contactWrapStyles = clsx(styles.contactWrap, 'contactWrap');

    return (
        <li className={contactStyles}>
            <p className={contactWrapStyles}>
                <span>
                    {name}
                </span>
                <span>
                    {number}
                </span>
            </p>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default Contact;