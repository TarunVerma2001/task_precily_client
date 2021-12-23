import { addCard } from './../utils/api';
import { useState } from 'react';
import styles from './addCard.module.css';
import toast from 'react-hot-toast';

const AddCard = () => {
  const [addTitle, setAddTitle] = useState();
  const [addDescription, setAddDescription] = useState();

  const onLoadAdd = () => {
    toast.success('Card succesfully added!');
  };

  const addData = async (data) => {
    if (addTitle.length >= 10 || addDescription.length >= 100) {
      console.log('clicked');
      addCard(data, onLoadAdd);
    } else {
      toast.error(
        'title length should be greater then 10 and description length should be greater the 100!'
      );
    }
  };
  return (
    <div className={styles.addCard}>
      <div className={styles.box2}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setAddTitle(e.target.value)}
        />
        <textarea
          rows={10}
          placeholder="Description"
          onChange={(e) => setAddDescription(e.target.value)}
        ></textarea>
        <button
          onClick={() =>
            addData({ title: addTitle, description: addDescription })
          }
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCard;
