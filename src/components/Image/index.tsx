import { useState } from 'react';

import Loader from '../Loader';
import { STATUS } from '../../constants';

import css from './index.module.css';

type Props = {
  src: string;
  width?: string;
  height?: string;
};

const Image = ({ src, width, height }: Props) => {
  const [loading, setLoading] = useState(STATUS.loading);
  const onLoadHandler = () => {
    setLoading(STATUS.success);
  };

  return (
    <div className={css.root} style={{ width, height }}>
      <Loader status={loading} />
      <img
        className={css.image}
        src={src}
        alt="Oops..."
        onLoad={onLoadHandler}
      />
    </div>
  );
};

export default Image;
