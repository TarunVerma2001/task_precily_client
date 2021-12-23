import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
  baseURL: 'https://task-precify-server.herokuapp.com/api/',
});

export const getAllCards = async () => {
  try {
    const res = await api.get('/cards');
    return {
      status: 'success',
      ...res.data,
    };
  } catch (err) {
    toast.error(err.respose.data.message);
  }
};

export const addCard = async (data, onLoad) => {
  try {
    console.log('i love india');
    await api.post('/cards', data);
    onLoad();
  } catch (err) {
    console.log(err.response);
    toast.error(err.response.data.message);
  }
};
export const updateCard = async (data, onLoad, id) => {
  try {
    await api.patch(`/${id}`, data);
    onLoad();
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
