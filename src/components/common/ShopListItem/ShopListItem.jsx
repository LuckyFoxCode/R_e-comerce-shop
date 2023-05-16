import PropTypes from 'prop-types';
import { Icon } from '../Icon/';
import styles from './ShopListItem.module.scss';

export const ShopListItem = ({ item }) => {
  const sneakersImage = [
    '/sneakers_01.jpg',
    '/sneakers_02.jpg',
    '/sneakers_03.jpg',
    '/sneakers_04.jpg',
    '/sneakers_05.jpg',
    '/sneakers_06.jpg',
    '/sneakers_07.jpg',
    '/sneakers_08.jpg',
    '/sneakers_09.jpg',
    '/sneakers_01.jpg',
    '/sneakers_04.jpg',
    '/sneakers_10.jpg',
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
