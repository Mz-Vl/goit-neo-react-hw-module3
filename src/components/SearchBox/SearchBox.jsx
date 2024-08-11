// SearchBox.jsx
import clsx from 'clsx';

import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
const searchBoxStyles = clsx(styles.searchBox, 'searchBox');

    return (
        <div className={searchBoxStyles}>
            <label>
                Find contacts by name
                <input
                    type="text" value={value} onChange={onChange}
                />
            </label>
        </div>
    );
};

export default SearchBox;