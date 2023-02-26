import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { db, signInWithEmailAndPassword, auth} from "../config/firebase";
// import { auth } from "../config/firebase";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // const userCredential = await auth.signInWithEmailAndPassword(auth, email, password);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully:', userCredential.user.uid);

      const user = userCredential.user;
    // const user1 = userCredential.user.uid;
    console.log("User created", user.uid);

    var ok = localStorage.setItem('UID', user.uid);
    console.log("session Created", ok); 
      // Redirect the user to the dashboard page
      router.push('/');
    } catch (error) {
      console.error('Failed to login:', error);
      // Display an error message to the user
      alert(error.message);
    }
  };

  return (
    <>
    
      <main className="container mt-5">
        <div className="text-center">
          <h1 className="mb-3">Login</h1>
        </div>

        <form id="todo-form">
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
          <button onClick={onSubmit} type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          Don't have an account? <Link href="/signup">Sign up</Link>
        </div>
      </main>
    </>
  );
};

export default Signin;
