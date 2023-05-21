import React, { useRef, useState } from 'react';

import { STATUS } from '../../constants';
import {
  PRECIPITATION,
  PEOPLE_IMAGES,
  CLOSES_IMAGES,
  PEOPLE,
} from '../../entities/Weather/constants';
import Loader from '../Loader';
import { getCloses } from '../../entities/Weather/helpers';

import css from './index.module.css';

type Props = {
  temperature: number;
  wind: number;
  precipitation: PRECIPITATION;
};

const PeopleCloses = ({ precipitation, temperature, wind }: Props) => {
  let count = useRef(0);
  const [status, setStatus] = useState(STATUS.loading);
  const closes = getCloses(temperature, wind, precipitation);

  const countHandler = () => {
    count.current++;

    if (count.current === closes.length + 1) {
      setStatus(STATUS.success);
    }
  };

  return (
    <div className={css.root}>
      <div className={css.closes}>
        <Loader status={status} />
        <img
          src={PEOPLE_IMAGES[PEOPLE.Girl]}
          className={status === STATUS.loading ? css.loading : css.loaded}
          alt="Girl"
          onLoad={countHandler}
        />
        {closes.map((close, index) => (
          <img
            src={CLOSES_IMAGES[close]}
            className={status === STATUS.loading ? css.loading : css.loaded}
            onLoad={countHandler}
            alt={close}
            key={index}
          />
        ))}
      </div>
      <h2>Necessary clothing</h2>
    </div>
  );
};

export default PeopleCloses;
