import LazyLoad from 'react-lazy-load';

import css from './index.module.css';

type Props = {
  src?: string;
};

const Image = ({ src }: Props) => {
  return (
    <LazyLoad>
      <img className={css.image} src={src} alt="" />
    </LazyLoad>
  );
};

export default Image;
