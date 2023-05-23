import React from 'react';

import Weather from '../Weather';
import PeopleCloses from '../PeopleCloses';
import { STATUS } from '../../constants';
import { PRECIPITATION } from '../../entities/Weather/constants';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';

import css from './index.module.css';

type Props = {
  temperature: number | null;
  wind: number | null;
  precipitation: PRECIPITATION | null;
  city: string | null;
  country: string | null;
  errorMessage: string | null;
  status: STATUS | null;
};

const Card = ({
  city,
  country,
  errorMessage,
  precipitation,
  status,
  temperature,
  wind,
}: Props) => {
  return (
    <div className={css.root}>
      <ErrorMessage errorMessage={errorMessage} />
      <Loader status={status} />

      {status === STATUS.success && (
        <div className={css.card}>
          <h2>The weather</h2>
          <div className={css.wrapper}>
            {temperature && wind && precipitation && (
              <PeopleCloses
                temperature={temperature}
                wind={wind}
                precipitation={precipitation}
              />
            )}
            <Weather
              temperature={temperature}
              wind={wind}
              precipitation={precipitation}
              status={status}
              city={city}
              country={country}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
