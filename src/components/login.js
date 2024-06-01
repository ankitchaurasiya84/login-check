import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const [email,setEmail]=useState('')
  const [validEmail,setEmailValid]=useState(true)


  const emailValidator=(e)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
  }
  const handleEmailChange=(e)=>{
    console.log(e.target.value);
    setEmail(e.target.value)
    setEmailValid(emailValidator(e.target.value))

  }

  const handlePwdCng = (e) => {
    setPassword(e.target.value);
    console.log(`set Hnagle ${password}`);
  };

  const handleCnfPwdCng = (e) => {
    setConfirmPassword(e.target.value);
    console.log(`setconfirm  Hnagle ${confirmPassword}`);
    setPasswordsMatch(e.target.value === password);
  };

  const togglePasswordVisibility1 = () => {
    setVisible1(!visible1);
  };

  const togglePasswordVisibility2 = () => {
    setVisible2(!visible2);
  };
  
  return (
    <>
    <div className="card">
      <h1 align="center">Signup</h1>
      <div align="center">
        <ul>
          <input type="text" placeholder="Enter User ID"  />
        </ul>

        <ul>
          <input type="text" placeholder="Enter Email Here" onChange={handleEmailChange} />
          {!validEmail && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
        </ul>
        <ul>
          <input
            type={visible1 ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={handlePwdCng}
          />
          <button onClick={togglePasswordVisibility1}>
            {visible1 ? <FaEyeSlash /> : <FaEye />}
          </button>
        </ul>

        <ul>
          <input
            type={visible2 ? "text" : "password"}
            value={confirmPassword}
            onChange={handleCnfPwdCng}
            placeholder="ReEnter Password"
          />
          <button onClick={togglePasswordVisibility2}>
            {visible2 ? <FaEyeSlash /> : <FaEye />}
          </button>
        </ul>
        {!passwordsMatch && <p> Passwords do not match</p>}

        <button>Submit</button>
      </div>
      </div>
    </>
  );
};

export default Login;
