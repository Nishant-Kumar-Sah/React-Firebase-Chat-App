import React, { useState } from 'react'
import EmojiPicker from "emoji-picker-react"
import "./chat.css"
const Chat = () => {
        const [openEmoji, setOpenEmoji] = useState(false)
        const [text, setText] = useState("")
        console.log(text)
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
                        <div className="center"></div>
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
                                                onClick={()=> setOpenEmoji(prev => !prev)}
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