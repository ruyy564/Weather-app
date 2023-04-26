import { memo } from 'react';
import { FaTemperatureHigh } from 'react-icons/fa';
import { SiWindicss } from 'react-icons/si';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import getClasses from '../../helpers/getClasses';

import css from './index.module.css';

type Props = {
  onClick: () => void;
};

export const IconTemp = memo(({ temp }: { temp: number }) => {
  let className = css.root;

  if (temp >= 20) {
    className = getClasses(className, css.high);
  }
  if (temp < 20 && 10 <= temp) {
    className = getClasses(className, css.preHigh);
  }
  if (temp < 10 && 0 < temp) {
    className = getClasses(className, css.middle);
  }
  if (temp <= 0 && -10 < temp) {
    className = getClasses(className, css.preLow);
  }
  if (temp <= -10) {
    className = getClasses(className, css.low);
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
    className = getClasses(className, css.high);
  }
  if (speed <= 10 && 5.4 < speed) {
    className = getClasses(className, css.preHigh);
  }
  if (speed <= 5.4 && 0 < speed) {
    className = getClasses(className, css.preLow);
  }
  if (speed <= 0.2 && 0 <= speed) {
    className = getClasses(className, css.zero);
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
      className={getClasses(css.icon, css.cross)}
      onClick={onClick}
    />
  );
});

export const IconSearch = memo(({ onClick }: Props) => {
  return <BsFillSearchHeartFill className={css.icon} onClick={onClick} />;
});
