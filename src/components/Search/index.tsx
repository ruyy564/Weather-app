import { memo } from 'react';

import useSearch from '../../hooks/useSearch';
import { IconCross } from '../Icon';

import css from './index.module.css';

type Props = {
  fetchWeatherByCity: (city: string) => void;
};

const Search = memo(({ fetchWeatherByCity }: Props) => {
  const {
    searchValue,
    input,
    changeHandler,
    clear,
    keyDownHandler,
    setFocusOnInput,
  } = useSearch(fetchWeatherByCity);

  return (
    <button className={css.root} onClick={setFocusOnInput}>
      <input
        type="text"
        ref={input}
        placeholder="input your city..."
        className={css.search}
        value={searchValue}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
      {searchValue && <IconCross onClick={clear} />}
    </button>
  );
});

export default Search;
