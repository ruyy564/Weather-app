import css from './index.module.css';

type Props = {
  src?: string;
};

const Image = ({ src }: Props) => {
  return <img className={css.image} src={src} alt="" loading="lazy" />;
};

export default Image;
