import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import styles from './SignUp.module.css';
import 'react-toastify/dist/ReactToastify.css'; // Import the toast CSS

function Sign_Up() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // For navigation after successful signup

    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      const copySignupInfo = { ...signupInfo };
      copySignupInfo[name] = value;
      setSignupInfo(copySignupInfo);
  }
    // Handle form submission
    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;

        // Input validation
        if (!name) {
            toast.error("Name is required");
            return;
        }
        if (!email) {
            toast.error("Email is required");
            return;
        }
        if (!password) {
            toast.error("Password is required");
            return;
        }

        console.log("Signup info:", signupInfo);

        try {
            const url = "http://localhost:3000/api/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signupInfo),
            });
            const result = await response.json();

           
            if (result.success) {
              toast.success("Signup successful!", {
                    position: "top-right",  
                    autoClose: 1000,        
                   
                });
                setTimeout(() => {
                    navigate("/login"); 
                }, 1000); 
            } else {
                toast.error(result.message || "Signup failed");
            }
        } catch (err) {
            toast.error("An error occurred during signup");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className='font-bold'>Signup</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder='Enter your name...'
                        value={signupInfo.name}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={signupInfo.password}
                    />
                </div>
                <button className={styles.btn} type='submit'>Signup</button>
                <span>
                    Already have an account? <Link to="/login" className='text-blue-700'>Login</Link>
                </span>
            </form>
            <ToastContainer /> 
        </div>
    );
}

export default Sign_Up;
