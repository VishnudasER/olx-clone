import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebaseContext} from '../../store/Context'
import{useHistory , Link} from 'react-router-dom'


function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
const{firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/")
      
    }).catch((error)=>{
      alert(error.message)
    })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Description" ></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/signup">Signup</Link>
      <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Login;
