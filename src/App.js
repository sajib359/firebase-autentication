import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';
const auth =getAuth(app);
function App() {
  const [user , setUser]= useState({});
  const provider = new GoogleAuthProvider();
 const signInHandler =()=>{
   signInWithPopup(auth,provider)
   .then(result=>{
     const user=result.user;
     setUser(user);
     console.log(user);
   })
   .catch(error=>{
    console.error('error',error);
   })

 }
 const signOutHandler =()=>{
  signOut(auth)
  .then(()=>{
    setUser({});
  })
  .catch(()=>{
    setUser({});
  })
 }
  return (
    <div className="App">
      {
        user.email ? <button onClick={signOutHandler}>Sign Out</button>
        :
        <button onClick={signInHandler}>Google sign In</button>
        
      }
      <h2>Name: {user.displayName}</h2>
      <h3>Email: {user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
