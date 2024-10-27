import React from 'react'

const Login = () => {
  const [avatar, setAvator] = useState({
    file:null,
    url:""
  })
  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back,</h2>
        <form>
          <input type="text" placeholder='Email' name="email" />
          <input type="password" placeholder='Password' name="password" id="" />
          <button>Login</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form>
          <label htmlFor="file">Upload An image</label>
          <input 
            type="file" 
            id='file' 
            style={{display:"none"}}
            onChange={handleAvatar}
          />
          <input type="text" placeholder='Username' name="sername" />
          <input type="text" placeholder='Email' name="email" />
          <input type="password" placeholder='Password' name="password" id="" />
          <button>Sign Up</button>
        </form>
      </div>
      

    </div>
  )
}

export default Login
