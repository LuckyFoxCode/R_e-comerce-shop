import { ShopListItem } from '../ShopListItem';
import styles from './ShopList.module.scss';

const sneakers = [
  {
    id: '01',
    image: './src/images/sneakers_01.jpg',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '02',
    image: './src/images/sneakers_02.jpg',
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '03',
    image: './src/images/sneakers_03.jpg',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '04',
    image: './src/images/sneakers_04.jpg',
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '05',
    image: './src/images/sneakers_05.jpg',
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '06',
    image: './src/images/sneakers_06.jpg',
    title: 'Мужские Кроссовки Nike Kyrie 7',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '07',
    image: './src/images/sneakers_07.jpg',
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '08',
    image: './src/images/sneakers_08.jpg',
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '09',
    image: './src/images/sneakers_09.jpg',
    title: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '10',
    image: './src/images/sneakers_01.jpg',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '11',
    image: './src/images/sneakers_04.jpg',
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 89.99,
    isFavorited: false,
  },
  {
    id: '12',
    image: './src/images/sneakers_10.jpg',
    title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: 89.99,
    isFavorited: false,
  },
];

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
