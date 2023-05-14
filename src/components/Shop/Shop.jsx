import { Input } from '../common/Input';
import { ShopList } from '../common/ShopList';
import styles from './Shop.module.scss';

export const Shop = () => {
  return (
    <section className={styles.shop}>
      <div className={styles.shop__header}>
        <h2 className={styles.shop__header_title}>Все кроссовки</h2>
        <Input />
      </div>
      <ShopList />
    </section>
  );
};
