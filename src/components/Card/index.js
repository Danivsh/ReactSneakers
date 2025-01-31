import React from 'react';
import styles from './Card.module.scss';

function Card({ onClickFavorite, title, imageUrl, price, onPlus, onFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="/img/like.svg" alt="Like" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <p>{title}</p>
      <div className="d-flex justify-between alighn-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/confirm.svg' : '/img/plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
