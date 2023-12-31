import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import loginVideo from '../../assets/videos/login_page_video.mp4'
import signUpVideo from '../../assets/videos/signup_video.mp4'

import './index.css'


const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [successResponseBool, setSuccessResponseBool] = useState(false)
    const [errorResponseBool, setErrorResponseBool] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    },);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const onSubmitSignUp = () => {
            navigate('/login', {replace: true})
        }

        if (username === '' || password === '' || email === '' || number === ''){
            console.log("credentials required")
          }else{
            const userDetails = {
             userId : uuidv4(),
             username,
             password,
             email,
             number
            };
            const url = "http://localhost:8080/signup";
            const options = {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json'
            },
              body: JSON.stringify(userDetails),
            }

            try {
                const response = await fetch(url, options)

                if(!response.ok){
                    const errorData = await response.json();
                    setErrorResponseBool(true)
                    setSuccessMessage('')
                    setErrorMessage(errorData.errorMsg)
                    
                }else{
                    const data = await response.json();
                    setSuccessResponseBool(true)
                    setErrorMessage('')
                    setSuccessMessage(data.successMsg)
                    onSubmitSignUp()
                }
                
            } catch (error) {
                setErrorResponseBool(true)
                setSuccessMessage('')
                setErrorMessage(error.message)
            }
        }
        setUsername('')
        setPassword('')
        setNumber('')
        setEmail('')
    }
  return (
    <div className='login'>
        <video className='video mobile-view' autoPlay loop >
            <source src={loginVideo} type="video/mp4" />
        </video>
        <video className='video desktop-view' autoPlay loop >
            <source src={signUpVideo} type="video/mp4" />
        </video>
        <div className='login-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h1 className='form-title-og'>Welcome  To <br /><span className="form-title">Readers Cafe</span></h1>
                <h2 className='form-title-og'>Create Account</h2>
                <div className='form-group'>
                    <label  htmlFor='username'>Username</label>
                    <input placeholder='Name 🔰'  className='form-input' type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className='form-group'>
                    <label  htmlFor='email'>Email</label>
                    <input placeholder='Email Id 👨‍💻' className='form-input' type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input placeholder='Password 🔑' className='form-input' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className='form-group'>
                    <label htmlFor="number">Phone Number</label>
                    <input placeholder='Phone number 📱' className='form-input' type='telephone' id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
                </div>
                <button className='login-button' type="submit">Register</button>
                {errorResponseBool ? (<p className='message'> {errorMessage} </p>) : null}
                {successResponseBool ? (<p className='success-message'> {successMessage} </p>) : null}

                <p className='signup-link'>By creating an account, you agree to the Goodreads <span>Terms of Service</span> and <span>Privacy Policy</span></p>
                <p className='signup-link'>Already have an account? <span><Link to="/login" className='signup-link-word'>Sign In</Link></span> </p>
            </form>
        </div>
    </div>
  )
}

export default SignUp