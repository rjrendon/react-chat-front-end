import React from 'react'


import './Input.css';


const Input = ({message, setMessage, sendMessage}) => (
    <form className='form'>
        <input
        className='input'
        type='text'
        placeholder='Type a message'
        value={message}
        onChange={(event) => setMessage(event.target.value)} 
        onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null}

        >
        </input>
        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>
)

export default Input;