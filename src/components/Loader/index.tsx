import { STATUS } from '../../constants';
import getClasses from '../../helpers/getClasses';

import css from './index.module.css';

type Props = {
  status: string | null;
};

const Loader = ({ status }: Props) => {
  return (
    <div
      className={
        status === STATUS.loading ? getClasses(css.root, css.active) : css.root
      }
    >
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;
