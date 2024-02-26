import React from 'react'
import '../styles/Card.scss'
import { Link } from 'react-router-dom'
const Card = ({title,chaine,create,vues,index,videoId}) => {
  return (
    <div className='card' key={index}>
        <div className="img">
          <Link to={`/details/${videoId}`}>
          <img width="100%" height="100%" src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" />
          </Link>
        {/* <iframe width="300" height="200" src={"https://www.youtube.com/embed/"+videoId} frameborder="0" allowfullscreen></iframe>  */}
        </div>
        <div className="bodyCard">
            <div className="titleCard">
            </div>
            <div className="chaineCard">
            <img className='logoChaineCard' src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="LOGO" />
            <h2>{title}</h2>
              {chaine}</div>
            <div className="vuesCard">{vues} vue . il y a {create}</div>
        </div>
    </div>
  )
}

export default Card