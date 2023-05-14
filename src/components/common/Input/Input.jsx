import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import styles from './Input.module.scss';

export const Input = ({ className }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type='text'
        className={clsx(className, styles.input)}
        placeholder='Поиск...'
      />
      <Icon
        name='search'
        width={16}
        height={16}
        fill='#c4c4c4'
        className={styles.input__icon}
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
};
