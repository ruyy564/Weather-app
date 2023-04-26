import React from 'react';

import { STATUS } from '../../constants';
import {
  PRECIPITATION,
  PRECIPITATION_IMAGES,
  PEOPLE_IMAGES,
  CLOSES_IMAGES,
  PEOPLE,
} from '../../entities/Weather/constants';
import ErrorMessage from '../ErrorMessage';
import Image from '../Image';
import { IconTemp, IconWind } from '../Icon';
import Loader from '../Loader';
import { getCloses } from '../../entities/Weather/helpers';

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

type PeopleClosesProps = {
  temperature: number | null;
  wind: number | null;
  precipitation: PRECIPITATION | null;
};

const PeopleCloses = ({
  precipitation,
  temperature,
  wind,
}: PeopleClosesProps) => {
  if (temperature && wind && precipitation) {
    return (
      <div className={css.closes}>
        <img src={PEOPLE_IMAGES[PEOPLE.Girl]} alt="girl" />
        {getCloses(temperature, wind, precipitation).map((close, index) => (
          <img src={CLOSES_IMAGES[close]} alt={close} key={index} />
        ))}
      </div>
    );
  }

  return null;
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
      <div className={css.wrapper}>
        <PeopleCloses
          temperature={temperature}
          wind={wind}
          precipitation={precipitation}
        />
        <div className={css.weather}>
          {precipitation && (
            <Image
              src={PRECIPITATION_IMAGES[precipitation]}
              width={'130px'}
              height={'130px'}
            />
          )}

          {status === STATUS.success && (
            <React.Fragment>
              <div className={css.header}>
                {city}, {country}
              </div>

              {temperature !== null && <IconTemp temp={temperature} />}
              {wind !== null && <IconWind speed={wind} />}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
