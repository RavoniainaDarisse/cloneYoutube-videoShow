import React from 'react'
import '../styles/CardVues.scss'
import { Link } from 'react-router-dom'


const CardVues = ({title,chaine,vues,index,videoId}) => {
  return (
    <div className='CardVues' key={index}>
        <div className="card">
            <div className="img">
          <Link to={`/details/${videoId}`}>
          <img width="100%" height="100%" src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" />
          </Link>
            </div>
            <div className="contentCard">
                <div className="title">{title}</div>
                <div className="chaine">{chaine} . {vues} vues</div>
                <div className="desc">{title}</div>
            </div>
        </div>
    </div>
  )
}

export default CardVues