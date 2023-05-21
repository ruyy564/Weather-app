import { useState } from 'react';
import classNames from 'classnames';

import noPhoto from '../../assets/no-photo.jpg';

import css from './index.module.css';

type Props = {
  src: string;
  placeholder?: string;
  width?: string;
  height?: string;
  alt?: string;
};

const ProgressiveImage = ({
  src,
  placeholder = noPhoto,
  width = '100%',
  height = '100%',
  alt = '',
}: Props) => {
  const [loading, setLoading] = useState(true);

  const loadingHandler = () => {
    setLoading(false);
  };

  return (
    <div className={css.root} style={{ width, height }}>
      <img
        className={classNames(
          css.image,
          css.preload,
          loading ? css.loading : css.loaded
        )}
        width={width}
        height={height}
        alt={alt}
        src={placeholder}
      />
      <img
        className={classNames(
          css.image,
          css.main,
          loading ? css.loading : css.loaded
        )}
        onLoad={loadingHandler}
        width={width}
        height={height}
        alt={alt}
        src={src}
      />
    </div>
  );
};

export default ProgressiveImage;
