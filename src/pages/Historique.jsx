import CardVues from '../content/CardVues'
import '../styles/Historique.scss'
import React from 'react'


const Historique = () => {
  return (
    <div>
      <h1>Historique de visionnage</h1>
      <div className="liste">
        <CardVues />
        <CardVues />
        <CardVues />
        {/* {
          data.map((data,index)=>{
            return(
              <CardVues key={index} videoId={data.id.videoId} title={data.snippet.title} chaine={data.snippet.channelTitle}  vues="10K" />
            )
          })
        } */}
      </div>
    </div>
  )
}

export default Historique