import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='d-flex justify-content-center  align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25 '>
    <h2>Sign In</h2>

        <form action=''>
             <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='enter email' className='form-control rounded-0'/>
             </div>
             <div className='mb-3'>
                <label htmlFor='password'>Email</label>
                <input type='password' placeholder='enter password' className='form-control rounded-0'/>
             </div>
             <button className='btn btn-success w-100'>Log In</button>
             <p>You are agree to aour trems and policites</p>
             <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
         </form>
        </div>
    </div>
  )
}

export default Login