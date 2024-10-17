import React, { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'
const Login = () => {

    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = e => {
        if (e.target.files[0]) {

            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])

            })
        }
    }


    const handleLogin=e=>{
        e.preventDefault()
        // toast.success("hello");
    }
    return (
        <div className='login'>
            <div className='item'>

                <h2> Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <input type='text' placeholder='Email' name='Email' />
                    <input type='password' placeholder='Password' name='Password' />
                    <button> Signup</button>

                </form>
            </div>


            <div className='seperator'></div>
            <div className='item'>
                <h2> Create an Account</h2>
                <form >
                    <label htmlFor='file'>
                        <img src={avatar.url || "./avatar.png"} alt='' />
                        Upload Image </label>
                    <input type='file' id='file' style={{ display: 'none' }} onChange={handleAvatar} />

                    <input type='text' placeholder='UserName' name='UserName' />

                    <input type='text' placeholder='Email' name='Email' />
                    <input type='password' placeholder='Password' name='Password' />
                    <button> SignUp</button>

                </form>
            </div>


        </div>
    )
}

export default Login