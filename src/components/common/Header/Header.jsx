import Logo from '../../../images/Logo.png';
import { Icon } from '../Icon/Icon';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img
          src={Logo}
          alt='Logo'
          className={styles.header__logo_image}
        />
        <div className={styles.header__logo_wrapper}>
          <h1>REACT SNEAKERS</h1>
          <span>Магазин лучших кроссовок</span>
        </div>
      </div>
      <ul className={styles.header__nav}>
        <li className={styles.header__nav_item}>
          <a
            className={styles.header__nav_link}
            href='#'>
            <Icon
              name='backet'
              width={20}
              height={20}
              fill='#9B9B9B'
            />
            <span>$ 0</span>
          </a>
        </li>
        <li className={styles.header__nav_item}>
          <a
            className={styles.header__nav_link}
            href='#'>
            <Icon
              name='like'
              width={20}
              height={20}
              fill='#9B9B9B'
              className={styles.icon}
            />
          </a>
        </li>
        <li className={styles.header__nav_item}>
          <a
            className={styles.header__nav_link}
            href='#'>
            <Icon
              name='profile'
              width={20}
              height={20}
              fill='#9B9B9B'
              className={styles.icon}
            />
          </a>
        </li>
      </ul>
    </header>
  );
};
