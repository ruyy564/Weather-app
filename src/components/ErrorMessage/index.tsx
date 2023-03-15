import Image from '../Image';

import image from '../../assets/cry.png';
import css from './index.module.css';

type Props = {
  errorMessage: string | null;
};

const ErrorMessage = ({ errorMessage }: Props) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <div className={css.root}>
      <Image src={image} />
      <span className={css.text}>{errorMessage}</span>
    </div>
  );
};

export default ErrorMessage;
