import React, { useState, useRef } from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

import css from './index.module.css';

type Props = {
  fetchWeatherByCity: (city: string) => void;
};

const Search = ({ fetchWeatherByCity }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const input = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const MAX_LENGTH_INPUT = 100;

    if (searchValue.length < MAX_LENGTH_INPUT) {
      setSearchValue(event.currentTarget.value.slice(0, MAX_LENGTH_INPUT));
    }
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

  const clear = () => {
    setSearchValue('');
    input.current?.focus();
  };

  return (
    <button className={css.root}>
      <input
        type="text"
        placeholder="Your city..."
        ref={input}
        className={css.search}
        value={searchValue}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
      {searchValue && <RxCross2 onClick={clear} className={css.searchIcon} />}
      <BsFillSearchHeartFill
        className={css.searchIcon}
        onClick={clickHandler}
      />
    </button>
  );
};

export default Search;
