// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [formError, setFormError] = useState('');
//     const [message, setMessage] = useState('');
//     const [messageType, setMessageType] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Reset error messages
//         setEmailError('');
//         setPasswordError('');
//         setFormError('');

//         let hasError = false;

//         // Validate email
//         if (!email.includes('@gmail.com')) {
//             setEmailError('Invalid email address.');
//             hasError = true;
//         }

//         // Validate password
//         if (password.length < 6) {
//             setPasswordError('Invalid password.');
//             hasError = true;
//         }

//         // Handle form errors if any
//         if (!email || !password) {
//             setFormError('Invalid input format.');
//             hasError = true;
//         }

//         if (hasError) return;

//         // Simulate successful login
//         setMessageType('success');
//         setMessage('Login successful!');
        
//         // Clear form fields
//         setEmail('');
//         setPassword('');
        
//         // Redirect to Home page after successful login
//         setTimeout(() => {
//             navigate('/');
//         }, 1000); // Delay to allow the success message to be visible
//     };

//     return (
//         <div className="login-container">
//             <h1>Login</h1>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input
//                     // type="email"
//                     id="email"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 {emailError && <div className="error-message">{emailError}</div>}

//                 <label htmlFor="password">Password</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {passwordError && <div className="error-message">{passwordError}</div>}

//                 <button type="submit">Login</button>

//                 {formError && <div className="error-message">{formError}</div>}
//                 {message && (
//                     <div className={`message ${messageType}`}>
//                         {message}
//                     </div>
//                 )}
//             </form>
//         </div>
//     );
// }

// export default Login;

import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="normal">
      <form>
        <h1>Login</h1>
        <label>
            Username
        </label>
        <input type="text"></input>
        <br></br>
        <label>
            Password
        </label>
        <input type="password"></input>
        <br></br>
        <label>
            <p>Doesn't Have An Account ? <Link className='link' to='/register'>Create One !</Link></p>
        </label>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default Login
