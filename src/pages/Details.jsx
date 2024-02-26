import { useParams } from 'react-router-dom';
import CardVues from '../content/CardVues.jsx'
import '../styles/Details.scss'
import React from 'react'

const Details = ({data}) => {
  const routeParams = useParams();
  const Id = routeParams.id
  console.log(routeParams.id);
  return (
    <div className='Details'>
      <div className='rigth'>
        <div className="video">
        <iframe width="100%" height="100%"  src={"https://www.youtube.com/embed/"+Id} frameborder="0" allowfullscreen></iframe> 
        </div>
        <div className="titleVideo"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione fuga quam nulla ab reiciendis molestiae quasi numquam commodi facere dicta laborum, asperiores et!</h1></div>
        <div className="chaineVideo">
          <img src="" alt="" />
          <h4>Nom du Chaine</h4>
        </div>
        <div className="descriptionVideo">
          <h1 className='Datecreated'>18K Vues 31 mars 2021</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate adipisci aliquam quibusdam velit nemo nam, aut non sequi cumque accusamus totam nulla ullam ea exercitationem.</p>
        </div>
      </div>
      <div className='left'>
        {
          data.map((data,index)=>{
            return(
              <CardVues key={index} videoId={data.id.videoId} title={data.snippet.title} chaine={data.snippet.channelTitle}  vues="10K" />
            )
          })
        }</div>
      
    </div>
  )
}

export default Details