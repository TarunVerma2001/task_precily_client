import { addCard } from './../utils/api';
import { useState } from 'react';
import styles from './addCard.module.css';
import toast from 'react-hot-toast';

const AddCard = () => {
  const [addTitle, setAddTitle] = useState();
  const [addDescription, setAddDescription] = useState();


  //creates a toast alert when data is successfully added
  const onLoadAdd = () => {
    toast.success('Card succesfully added!');
  };

  //fxn for adding data
  const addData = async (data) => {
    if (addTitle.length >= 10 || addDescription.length >= 100) {
      console.log('clicked');
      addCard(data, onLoadAdd);
    } else {
      //if the length of the title is less then 10 
      //or the length of the description is less then 100 
      //it creates error alert toast
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
