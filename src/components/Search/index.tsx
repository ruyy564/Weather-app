import React, { useState, memo, useCallback } from 'react';

import { IconCross, IconSearch } from '../Icon';

import css from './index.module.css';

type Props = {
  fetchWeatherByCity: (city: string) => void;
};

const Search = memo(({ fetchWeatherByCity }: Props) => {
  const [searchValue, setSearchValue] = useState('');

  const changeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const MAX_LENGTH_INPUT = 100;

      if (searchValue.length < MAX_LENGTH_INPUT) {
        setSearchValue(event.currentTarget.value.slice(0, MAX_LENGTH_INPUT));
      }
    },
    [searchValue.length]
  );

  const fetchHandler = useCallback(() => {
    fetchWeatherByCity(searchValue);
  }, [fetchWeatherByCity, searchValue]);

  const keyDownHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        fetchHandler();
      }
    },
    [fetchHandler]
  );

  const clickHandler = useCallback(() => {
    fetchHandler();
  }, [fetchHandler]);

  const clear = useCallback(() => {
    setSearchValue('');
  }, []);

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
      {searchValue && <IconCross onClick={clear} />}
      <IconSearch onClick={clickHandler} />
    </button>
  );
});

export default Search;
