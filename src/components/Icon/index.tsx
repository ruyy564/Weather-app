import { memo } from 'react';

import { FaTemperatureHigh } from 'react-icons/fa';
import { SiWindicss } from 'react-icons/si';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

import css from './index.module.css';

type Props = {
  text: number | null;
};

type PropsWithClick = {
  onClick: () => void;
};

export const IconTemp = memo(({ text }: Props) => {
  return (
    <div className={css.root}>
      <FaTemperatureHigh className={css.icon} />
      <span>
        {text}
        <TbTemperatureCelsius className={css.icon} />
      </span>
    </div>
  );
});

export const IconWind = memo(({ text }: Props) => {
  return (
    <div className={css.root}>
      <SiWindicss className={css.icon} />
      <span>{text} m/s</span>
    </div>
  );
});

export const IconCross = memo(({ onClick }: PropsWithClick) => {
  return <RxCross2 className={css.icon} onClick={onClick} />;
});

export const IconSearch = memo(({ onClick }: PropsWithClick) => {
  return <BsFillSearchHeartFill className={css.icon} onClick={onClick} />;
});
