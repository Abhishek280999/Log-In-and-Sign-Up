import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const SignUp = () => {
    const [value, setvalue] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [error, seterror] = useState({

    })
    const handleSubmit = (event) => {
        event.preventDefault()
        seterror(validation(value))

    };
    const handleInput = (event) => {
        setvalue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    };
    return (
        <div className='d-flex justify-content-center  align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25 '>
                <h2>SignUp</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' placeholder='enter name' name='name' className='form-control rounded-0'
                            onChange={handleInput}
                        />
                {error.password && <span className='text-danger'>{error.password}</span>}

                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='enter email' name='email' className='form-control rounded-0'
                            onChange={handleInput}
                        />
                {error.password && <span className='text-danger'>{error.password}</span>}

                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='enter password' name='password' className='form-control rounded-0'
                            onChange={handleInput}
                        />
                {error.password && <span className='text-danger'>{error.password}</span>}

                    </div>
                    <button type='submit' className='btn btn-success w-100'>Sigh Up</button>
                    <p>You are agree to aour trems and policites</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log In</Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp