import { memo } from 'react';
import { FaTemperatureHigh } from 'react-icons/fa';
import { SiWindicss } from 'react-icons/si';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import classNames from 'classnames';

import css from './index.module.css';

type Props = {
  onClick: () => void;
};

export const IconTemp = memo(({ temp }: { temp: number }) => {
  let className = css.root;

  if (temp >= 20) {
    className = classNames(className, css.high);
  }
  if (temp < 20 && 10 <= temp) {
    className = classNames(className, css.preHigh);
  }
  if (temp < 10 && 0 < temp) {
    className = classNames(className, css.middle);
  }
  if (temp <= 0 && -10 < temp) {
    className = classNames(className, css.preLow);
  }
  if (temp <= -10) {
    className = classNames(className, css.low);
  }

  return (
    <div className={className}>
      <FaTemperatureHigh className={css.icon} />
      <span>
        {temp}
        <TbTemperatureCelsius className={css.icon} />
      </span>
    </div>
  );
});

export const IconWind = memo(({ speed }: { speed: number }) => {
  let className = css.root;

  if (speed > 10) {
    className = classNames(className, css.high);
  }
  if (speed <= 10 && 5.4 < speed) {
    className = classNames(className, css.preHigh);
  }
  if (speed <= 5.4 && 0 < speed) {
    className = classNames(className, css.preLow);
  }
  if (speed <= 0.2 && 0 <= speed) {
    className = classNames(className, css.zero);
  }

  return (
    <div className={className}>
      <SiWindicss className={css.icon} />
      <span>{speed} m/s</span>
    </div>
  );
});

export const IconCross = memo(({ onClick }: Props) => {
  return (
    <AiOutlineClose
      className={classNames(css.icon, css.cross)}
      onClick={onClick}
    />
  );
});

export const IconSearch = memo(({ onClick }: Props) => {
  return <BsFillSearchHeartFill className={css.icon} onClick={onClick} />;
});
