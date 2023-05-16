import { sneakers } from '../../../../sneakers_db';
import { ShopListItem } from '../ShopListItem';
import styles from './ShopList.module.scss';

export const ShopList = () => {
  return (
    <ul className={styles.shopList}>
      {(sneakers || []).map((item) => (
        <ShopListItem
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};
