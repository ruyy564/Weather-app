import { FaTemperatureHigh } from 'react-icons/fa';
import { SiWindicss } from 'react-icons/si';
import { TbTemperatureCelsius } from 'react-icons/tb';

import css from './index.module.css';

type Props = {
  text: number | null;
};

export const IconTemp = ({ text }: Props) => {
  return (
    <div className={css.root}>
      <FaTemperatureHigh className={css.icon} />
      <span>
        {text}
        <TbTemperatureCelsius className={css.icon} />
      </span>
    </div>
  );
};

export const IconWind = ({ text }: Props) => {
  return (
    <div className={css.root}>
      <SiWindicss className={css.icon} />
      <span>{text} m/s</span>
    </div>
  );
};
