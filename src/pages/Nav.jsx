import { Link } from 'react-router-dom'
import { ShowBarre,ShowsContext } from '../contexts/ShowContext'
import '../styles/Nav.scss'
import React, { useContext } from 'react'
const Nav = () => {
  const [Show,setShow] = useContext(ShowsContext)
  return (
    <>
      <div className="Navigation" 
      style={Show === "translate"?
      {width:ShowBarre[Show].width,
        translate:ShowBarre[Show].translate, 
        display:"none"}
      :{width:"400px",
        translate:"0%"}}
      >
        <ul>
          
          <li><Link to="/">Acceuil</Link></li>
          <li><Link to="/Shorts">Shorts</Link></li>
          <li><Link to="/Abonnements">Abonnement</Link></li>
        </ul>
        <ul>
          <li><Link to="/Historique">Historique</Link></li>
          <li><Link to="/Telechargement">Telechargement</Link></li>
          <li><Link to="/">A regarder plus tard</Link></li>
          <li><Link to="/">Video J'aime</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Nav