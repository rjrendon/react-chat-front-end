import React from 'react'

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

import './InfoBar.css'


const InfoBar = ({room}) => (
  <div className='infoBar'>
    <div className='leftInnerContainer'>
        <img className='onlineIcon' src={onlineIcon} alt = 'online image'>

        </img>
        <h3>{room}</h3>
    </div>

    <div className='rightInnerContainer'>
        <a href = "/"><img src={closeIcon} alt='close image'></img></a>
    </div>
  </div>
)

export default InfoBar