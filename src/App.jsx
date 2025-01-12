import { useState } from 'react'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import List from './components/list/List'
import './App.css'
import Login from './components/login/Login'
import Notification from './components/Notification'

const App = () => {
  const user = true;
  return (
    <div className="container">
      {user ? (
        <>
          <List/>
          <Chat/>
          <Detail/>
      
        </>
      ):(
      <Login/>

      )}
      <Notification/>
    </div>
  )
}

export default App
