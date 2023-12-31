import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import loginVideo from '../../assets/videos/login_page_video.mp4'
import './index.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {

    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successResponseBool, setSuccessResponseBool] = useState(false)
    const [errorResponseBool, setErrorResponseBool] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    },);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const onSubmitSuccess = (jwtToken) => {
            Cookies.set('jwt_token', jwtToken, { expires: 1 });
            navigate('/', { replace: true });
        } 

        if ( password === '' || email === '' ){
            console.log("credentials required")
          }else{
            const userDetails = {             
             password,
             email,             
            };
            const url = "http://localhost:8080/login";
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
                    const jwtToken = {data}
                    onSubmitSuccess(jwtToken)
                    setSuccessResponseBool(true)
                    setErrorMessage('')
                    setSuccessMessage(data.successMsg)                    
                }
                
            } catch (error) {
                setErrorResponseBool(true)
                setSuccessMessage('')
                setErrorMessage(error.message)
            }
        }
        
        setPassword('')
        setEmail('')

        
    }
  return ( 
    <div className='login'>
        <video className='video' autoPlay loop >
            <source src={loginVideo} type="video/mp4" />
        </video>
        <div className='login-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h1 className='form-title-og'>Welcome  To <br /><span className="form-title">Readers Cafe</span></h1>
                <div className='form-group'>
                    <label  htmlFor='email'>Email</label>
                    <input placeholder='Email Id 👨‍💻' className='form-input' type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input placeholder='Password 🔑' className='form-input' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Link className='forgot-password' to="/">Forgot password?</Link>
                <button className='login-button' type="submit">Login</button>
                {errorResponseBool ? (<p className='message'> {errorMessage} </p>) : null}
                {successResponseBool ? (<p className='success-message'> {successMessage} </p>) : null}
                <p className='signup-link'>Don't have an account? <span><Link to="/signup" className='signup-link-word'>Create Here</Link></span> </p>
            </form>
        </div>
    </div>
  )
}

export default Login