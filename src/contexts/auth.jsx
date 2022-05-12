import React, { createContext, useEffect, useState } from 'react';
import { getUsers } from '../firebase/database/users';
import { fireAuth, fireStore } from '../firebase/firebase';

export const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  const login = async (email, cpf) => {
    try {
      return await fireAuth
        .signInWithEmailAndPassword(email, cpf)
        .then(async (docs) => {
          return await fireStore
            .collection('users')
            .doc(docs.user.uid)
            .get()
            .then(async (doc) => {
              setUser(doc.data());
              await getUsers().then((users) => setAllUsers(users))
              return true;
            })
        });
    } catch (e) {
      console.log(e)
      return false
    }
  };

  const createUser = async (data) => {
    const create = await fireAuth.createUserWithEmailAndPassword(data.email, data.cpf);
    if (create.user) {
      const { uid } = fireAuth.currentUser;
      await fireStore
        .collection('users')
        .doc(uid)
        .set({
          name: data.name,
          email: data.email,
          cpf: data.cpf,
          phone: data.phone,
          created_at: new Date,
        });
      await getUsers().then((users) => setAllUsers(users));
      setUser(data);
      return true;
    } else {
      return false;
    }
  };

  const updateUser = async (data, id) => {
    try {
      await fireStore
        .collection('users')
        .doc(id)
        .update({
          ...data,
          updated_at: new Date,
        });
      await getUsers().then((users) => setAllUsers(users))
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
  };

  const signOut = async () => {
    try {
      setUser({});
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signOut,
        setUser,
        login,
        allUsers,
        setAllUsers,
        updateUser,
        createUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;