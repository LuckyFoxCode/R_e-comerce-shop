import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

export const Container = ({ children, className }) => {
  return <div className={clsx(className, styles.container)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
