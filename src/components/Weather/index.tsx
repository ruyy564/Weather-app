import React from 'react';

import { STATUS } from '../../constants';
import {
  PRECIPITATION,
  PRECIPITATION_IMAGES,
} from '../../entities/Weather/constants';
import ProgressiveImage from '../Image';
import { IconTemp, IconWind } from '../Icon';

import css from './index.module.css';

type Props = {
  temperature: number | null;
  wind: number | null;
  precipitation: PRECIPITATION | null;
  city: string | null;
  country: string | null;
  status: STATUS | null;
};

const Weather = ({
  city,
  country,
  precipitation,
  status,
  temperature,
  wind,
}: Props) => {
  return (
    <div className={css.weather}>
      {precipitation && (
        <ProgressiveImage
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
  );
};

export default Weather;
