import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db, createUserWithEmailAndPassword } from "../config/firebase";
import { auth, sendEmailVerification } from "../config/firebase";
import firebase from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

// import { signupuser } from "../redux/slice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const user1 = userCredential.user.uid;
    console.log("User created", user.uid);

    var ok = localStorage.setItem('UID', user.uid);
    console.log("session Created", ok);
    const docRef = await addDoc(collection(db, "Users"), { email, name, user1 });
    console.log("data added", docRef);
    // return user; 
    // const user = userCredential.user;
    // console.log(user);
    // dispatch(signupuser(userCredential));

    // return user;
    // await user.sendEmailVerification();
  };
  

  return (
    <>
      <main className="container mt-5">
        <div className="text-center">
          <h1 className="mb-3">SignUp Form</h1>
        </div>

        <form id="todo-form">
          <div className="form-group">
            <label htmlFor="todo-input">Name:</label>
            <input
              type="text"
              className="form-control"
              id="todo-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-input">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Task">Password:</label>
            <input
              type="password"
              className="form-control"
              id="task-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
          </div>
          <button type="submit" onClick={onSubmit} className="btn btn-primary">
            SignUp
          </button>
        </form>
      </main>
      
    </>
  );
};

export default Signup;
