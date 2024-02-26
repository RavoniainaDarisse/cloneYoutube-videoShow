import Card from '../content/Card'
import { listCateg } from '../data/listCateg'
import '../styles/Acceuil.scss'

const Acceuil = ({FilterData,data}) => {

  // const API_KEY = process.env.REACT_APP_YOUTUBE_KEY_API
  // const URL_YOUTUBE = 'https://youtube.googleapis.com/youtube/v3'



  console.log(data);  

  return (
    <div className='acceuil'>
      <div className="listPoplr">
          <ul>
            {listCateg.map((list,index)=>{
              return(
                <li key={index}>{list}</li>
              )
            })}
          </ul>
      </div>

      <div className="content">
        {data.map((data,index)=>{
          return(
            <Card key={index} index={index}  videoId={data.id.videoId} title={data.snippet.title} chaine={data.snippet.channelTitle} create={data.snippet.publishedAt} vues="10K"/>
          )
        })}
      
      </div>
    </div>
  )
}

export default Acceuil