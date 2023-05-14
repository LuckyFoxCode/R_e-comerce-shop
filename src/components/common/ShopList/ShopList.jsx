import { ShopListItem } from '../ShopListItem';
import styles from './ShopList.module.scss';

export const ShopList = () => {
  return (
    <ul className={styles.shopList}>
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
      <ShopListItem />
    </ul>
  );
};
