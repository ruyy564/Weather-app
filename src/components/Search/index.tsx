import { memo } from 'react';

import useSearch from '../../hooks/useSearch';
import { IconCross, IconSearch } from '../Icon';

import css from './index.module.css';

type Props = {
  fetchWeatherByCity: (city: string) => void;
};

const Search = memo(({ fetchWeatherByCity }: Props) => {
  const { searchValue, changeHandler, clear, clickHandler, keyDownHandler } =
    useSearch('', fetchWeatherByCity);

  return (
    <button className={css.root}>
      <input
        type="text"
        placeholder="Input city..."
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
