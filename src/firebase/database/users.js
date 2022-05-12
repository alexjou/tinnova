import { fireAuth, fireStore } from '../firebase';

const created_at = new Date;

export const getUsers = async () => {
  try {
    return await fireStore
      .collection('users')
      .get()
      .then((querySnapshot) => {
        let arrayUsers = [];
        querySnapshot.forEach((doc) => {
          arrayUsers.push({ ...doc.data(), id: doc.id });
        });
        return arrayUsers;
      });
  } catch (error) {
    console.log(error)
  }
};