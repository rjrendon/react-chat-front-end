import React, { useState } from 'react'
import {Link } from 'react-router-dom'

import './Join.css'
import logo from '../.././logo.svg';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');


   
  return (
    
    <div className="joinOuterContainer">
     <img src={logo} className="App-logo" alt="logo" />
      <div className="joinInnerContainer">
        <h1 className="heading">Chat</h1>
        <div>
          <input placeholder="Alias Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room Name" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Enter Room</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;