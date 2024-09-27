import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import styles from './SignUp.module.css';
import 'react-toastify/dist/ReactToastify.css'; // Import the toast CSS

function Log_In() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // For navigation after successful login

    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginInfo(prev => ({
          ...prev,
          [name]: value
      }));
    }

    // Handle  submission
    const handleLogin = async (e) => {
        e.preventDefault();
        const {email, password } = loginInfo;

        //  validation
        if (!email) {
            toast.error("Email is required");
            return;
        }
        if (!password) {
            toast.error("Password is required");
            return;
        }

        try {
          const url = "http://localhost:3000/api/login";
          const response = await fetch(url, {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(loginInfo)
          });

          const result = await response.json();
          const { success, message, jwtToken, name, error } = result;

          if (response.status === 200 && success) {
              toast.success('Login successful, navigating to home...');
              localStorage.setItem('token', jwtToken);
              localStorage.setItem('loggedInUser', name);
              
              setTimeout(() => {
                  navigate('/home'); // Correct navigation logic
              }, 1000); 
          } else if (error) {
              const details = error?.details?.[0]?.message || 'Login failed';
              toast.error(details);
          } else {
              toast.error(message);
          }
      } catch (err) {
          toast.error('An error occurred. Please try again later.');
          console.error(err);
      }
  }

  return (
      <div className={styles.container}>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
              <div>
                  <label htmlFor='email'>Email</label>
                  <input
                      onChange={handleChange}
                      type='email'
                      name='email'
                      placeholder='Enter your email...'
                      value={loginInfo.email}
                  />
              </div>
              <div>
                  <label htmlFor='password'>Password</label>
                  <input
                      onChange={handleChange}
                      type='password'
                      name='password'
                      placeholder='Enter your password...'
                      value={loginInfo.password}
                  />
              </div>
              <button className={styles.btn} type='submit'>Login</button>
              <span>Does't have an account?
                  <Link to="/signup" className='text-blue-700'>Signup</Link>
              </span>
          </form>
          <ToastContainer />
      </div>
  )
}

export default Log_In;
