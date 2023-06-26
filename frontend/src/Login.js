import React from 'react'

const Login = () => {
  return (
    <div className='d-flex justify-content-center  align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25 '>
        <form action=''>
             <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='enter email' className='form-control rounded-0'/>
             </div>
             <div className='mb-3'>
                <label htmlFor='password'>Email</label>
                <input type='password' placeholder='enter password' className='form-control rounded-0'/>
             </div>
             <button className='btn btn-success'>Login</button>
             <p>You are agree to aour trems and policites</p>
             <button className='btn btn-default border'>Create Account</button>
         </form>
        </div>
    </div>
  )
}

export default Login