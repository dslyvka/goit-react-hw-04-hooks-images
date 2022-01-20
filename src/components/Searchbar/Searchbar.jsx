import { Fragment, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const handleClick = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <Fragment>
      <header className="searchbar Searchbar">
        <form className="form SearchForm">
          <button
            type="submit"
            className="button SearchForm-button"
            onClick={handleClick}
          >
            <span className="button-label ">
              <FiSearch />
            </span>
          </button>

          <input
            className="input SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={handleChange}
          />
        </form>
      </header>
    </Fragment>
  );
}

export default Searchbar;
