import { cilSearch } from '@coreui/icons'
import {  ShowsContext } from '../contexts/ShowContext.jsx'
import '../styles/Head.scss'
import React, { useContext, useState } from 'react'
import Notification from './Notification.jsx'
const Head = ({placeholders,onTextChange}) => {
  const [Show,setShow] = useContext(ShowsContext)
  const [Notif, setNotif] = useState(false)

    function ToogleBar(){
      
      setShow(Show=="translate"?"none":"translate")
    }
    function handleNotif(){
      setNotif(!Notif)
    }

  return (
    <div className='head'>
        <div className='right'  >
            <input type="button" className='btn-burger' value="|||" onClick={ToogleBar} />
            <div className="logo">
              VideoShow
            </div>
        </div>
        <div className='center'>
          <div className="search">
            <input 
            className='inputSearch' 
            type="text"
            onChange={e => onTextChange(e.target.value)}
            placeholder={placeholders} />
            <div className='searchIcon'></div>
          </div>
        </div>
        <div className='left' onClick={handleNotif}>Notification</div>
        {Notif && <Notification />  }
    </div>
  )
}

export default Head