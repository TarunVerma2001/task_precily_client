import styles from './body.module.css';

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.topBoxes}>
        <div className={styles.box1}>
          <p>BOX 1</p>
        </div>
        <div className={styles.box2}>BOX 2</div>
      </div>
      <div className={styles.box3}>
        <p>BOX 3</p>
      </div>
    </div>
  );
};

export default Body;
