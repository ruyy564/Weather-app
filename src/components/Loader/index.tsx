import classNames from 'classnames';

import { STATUS } from '../../constants';

import css from './index.module.css';

type Props = {
  status: string | null;
};

const Loader = ({ status }: Props) => {
  return (
    <div
      className={
        status === STATUS.loading ? classNames(css.root, css.active) : css.root
      }
    >
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;
