import { useState, useCallback } from 'react';

const useSearch = (
  initState: string,
  fetchWeatherByCity: (city: string) => void
) => {
  const [searchValue, setSearchValue] = useState(initState);

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

  return { searchValue, clear, clickHandler, keyDownHandler, changeHandler };
};

export default useSearch;
