import React from 'react';

import { STATUS } from '../../constants';
import {
  PRECIPITATION,
  PRECIPITATION_IMAGES,
} from '../../entities/Weather/constants';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';
import Image from '../Image';
import { IconTemp, IconWind } from '../Icon';

import css from './index.module.css';

type Props = {
  temperature: number | null;
  wind: number | null;
  precipitation:
    | typeof PRECIPITATION.Clear
    | typeof PRECIPITATION.Clouds
    | typeof PRECIPITATION.Drizzle
    | typeof PRECIPITATION.Haze
    | typeof PRECIPITATION.Mist
    | typeof PRECIPITATION.Smoke
    | typeof PRECIPITATION.Snow
    | typeof PRECIPITATION.Rain
    | null;
  city: string | null;
  country: string | null;
  errorMessage: string | null;
  status:
    | typeof STATUS.error
    | typeof STATUS.error
    | typeof STATUS.error
    | null;
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
      {precipitation && <Image src={PRECIPITATION_IMAGES[precipitation]} />}
      {status === STATUS.success && (
        <React.Fragment>
          <div className={css.header}>
            {city}, {country}
          </div>
          {temperature && <IconTemp temp={temperature} />}
          {wind && <IconWind speed={wind} />}
        </React.Fragment>
      )}
    </div>
  );
};

export default Card;
