import { useState, useCallback, useRef, useEffect } from 'react';

const useSearch = (fetchWeatherByCity: (city: string) => void) => {
  const [searchValue, setSearchValue] = useState('');
  const input = useRef<HTMLInputElement>(null);

  const setFocusOnInput = () => {
    if (input.current) {
      input.current.focus();
    }
  };

  useEffect(() => {
    setFocusOnInput();
  }, []);

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
    setFocusOnInput();
  }, []);

  return {
    searchValue,
    input,
    clear,
    clickHandler,
    keyDownHandler,
    changeHandler,
    setFocusOnInput,
  };
};

export default useSearch;
