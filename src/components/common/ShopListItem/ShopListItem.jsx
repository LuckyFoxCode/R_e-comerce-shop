import Image from '../../../images/sneakers_01.jpg';
import { Icon } from '../Icon/';
import styles from './ShopListItem.module.scss';

export const ShopListItem = () => {
  return (
    <li className={styles.card}>
      <div className={styles.card__like}>
        <Icon
          name='like'
          width={14}
          height={14}
          fill='#ececec'
          className={styles.icon}
        />
      </div>
      <img
        src={Image}
        alt='Sneakers'
        className={styles.card__image}
      />
      <h3 className={styles.card__title}>Мужские Кроссовки Nike Blazer Mid Suede</h3>
      <div className={styles.card__wrapper}>
        <div className={styles.card__wrapper_price}>
          <span>цена:</span>
          <span>$ 89.99</span>
        </div>
        <div className={styles.card__wrapper_add}>
          <Icon
            name='plus'
            width={14}
            height={14}
            fill='#ececec'
          />
        </div>
      </div>
    </li>
  );
};
