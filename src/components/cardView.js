import styles from './cardView.module.css';

import { useEffect, useState } from 'react';

import { getAllCards } from './../utils/api';
const CardView = () => {
  const [cards, setCards] = useState();
  const [addUpdateCount, setCount] = useState();
  const getData = async () => {
    const res = await getAllCards();
    console.log(res);
    if (res.status === 'success') {
      setCards(res.data.cards);
      let totalAddAndCount = cards.length;
      cards.map((card) => (totalAddAndCount += card.updateCount));
      setCount(totalAddAndCount);
      console.log(res);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.cardView}>
      <h1> Add and Update Count: {addUpdateCount} </h1>

      <div>
        {cards &&
          cards.map((card) => (
            <div className={styles.card} key={card._id}>
              <div className={styles.cardTitle}>{card.title}</div>
              <div className={styles.cardDescription}>{card.description}</div>
              <div>{card.updateCount}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardView;
