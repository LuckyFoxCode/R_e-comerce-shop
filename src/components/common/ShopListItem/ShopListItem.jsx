import PropTypes from 'prop-types';
import { Icon } from '../Icon/';
import styles from './ShopListItem.module.scss';

export const ShopListItem = ({ item }) => {
  const sneakersImage = [
    './src/images/sneakers_01.jpg',
    './src/images/sneakers_02.jpg',
    './src/images/sneakers_03.jpg',
    './src/images/sneakers_04.jpg',
    './src/images/sneakers_05.jpg',
    './src/images/sneakers_06.jpg',
    './src/images/sneakers_07.jpg',
    './src/images/sneakers_08.jpg',
    './src/images/sneakers_09.jpg',
    './src/images/sneakers_01.jpg',
    './src/images/sneakers_04.jpg',
    './src/images/sneakers_10.jpg',
  ];

  return (
    <li className={styles.card}>
      <div className={styles.card__like}>
        <Icon
          name='like'
          width={14}
          height={14}
          className={styles.icon}
        />
      </div>
      <img
        src={sneakersImage[item.id]}
        alt='Sneakers'
        className={styles.card__image}
      />
      <h3 className={styles.card__title}>{item.title}</h3>
      <div className={styles.card__wrapper}>
        <div className={styles.card__wrapper_price}>
          <span>цена:</span>
          <span>$ {item.price}</span>
        </div>
        <div className={styles.card__wrapper_add}>
          <Icon
            name='plus'
            width={14}
            height={14}
            className={styles.addIcon}
          />
        </div>
      </div>
    </li>
  );
};

ShopListItem.propTypes = {
  item: PropTypes.object,
};
