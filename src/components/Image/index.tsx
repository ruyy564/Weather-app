import { useState } from 'react';

import Loader from '../Loader';
import { STATUS } from '../../constants';
import css from './index.module.css';

type Props = {
  src: string;
};

const Image = ({ src }: Props) => {
  const [loading, setLoading] = useState(STATUS.loading);
  const onLoadHandler = () => {
    setLoading(STATUS.success);
  };

  return (
    <div className={css.root}>
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
