import React, { useState } from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';

import css from './index.module.css';

type Props = {
  fetchWeatherByCity: (city: string) => void;
};

const Search = ({ fetchWeatherByCity }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const fetchHandler = () => {
    fetchWeatherByCity(searchValue);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchHandler();
    }
  };

  const clickHandler = () => {
    fetchHandler();
  };

  return (
    <button className={css.root}>
      <input
        type="text"
        placeholder="Your city..."
        className={css.search}
        value={searchValue}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
      <BsFillSearchHeartFill
        className={css.searchIcon}
        onClick={clickHandler}
      />
    </button>
  );
};

export default Search;
