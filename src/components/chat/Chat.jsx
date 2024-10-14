import React, { useEffect, useRef, useState } from 'react'
import EmojiPicker from "emoji-picker-react"
import "./chat.css"
const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false)
  const [text, setText] = useState("")
  const endRef = useRef(null)
  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"});
  },[]);
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji)
    setOpenEmoji(false)
  }
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img src="https://images.unsplash.com/photo-1728716858431-001a104dd639?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam libero neque officia accusamus dolor vel cumque magni repellendus inventore similique!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam libero neque officia accusamus dolor vel cumque magni repellendus inventore similique!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam libero neque officia accusamus dolor vel cumque magni repellendus inventore similique!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam libero neque officia accusamus dolor vel cumque magni repellendus inventore similique!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder='Type a message...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpenEmoji(prev => !prev)}
          />
          <div className="emojiPicker">
            <EmojiPicker
              open={openEmoji}
              onEmojiClick={handleEmoji}
            />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>

  )
}

export default Chat

