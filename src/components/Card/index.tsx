import React from 'react';

import { STATUS } from '../../constants';
import {
  PRECIPITATION,
  PRECIPITATION_IMAGES,
} from '../../entities/Weather/constants';
import ErrorMessage from '../ErrorMessage';
import Image from '../Image';
import { IconTemp, IconWind } from '../Icon';
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
      {precipitation && <Image src={PRECIPITATION_IMAGES[precipitation]} />}
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

export default Card;
