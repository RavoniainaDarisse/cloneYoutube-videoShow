import './App.scss'
import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Acceuil from './pages/Acceuil.jsx'
import Abonnements from './pages/Abonnements.jsx'
import Details from './pages/Details.jsx'
import Historique from './pages/Historique.jsx'
import Nav from './pages/Nav.jsx'
import Shorts from './pages/Shorts.jsx'
import Telechargement from './pages/Telechargement.jsx'
import Head from './pages/Head.jsx'
import { ShowsContext } from './contexts/ShowContext.jsx'
import { data } from './data/data.js'
import axios from 'axios'



const App = () => {
  const InitalState = useContext(ShowsContext)
  const [Show, setShow] = useState(InitalState)

  const [SearchText, setSearchText] = useState("")


  const FilterData = data.filter(i =>{
    const containtTitle = i.title.toUpperCase().includes(SearchText.toUpperCase());

    return containtTitle;
  })
 
  console.log(FilterData);

  // -----------------------------------------------------
  
  const [item, setItem] = useState([])


  useEffect(() => {

    const dataYoutube = async() =>{
      try {
        await axios.get("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCK8sQmJBp8GCxrOtXWBpyEA&maxResults=20&key=AIzaSyDOagY0Eyj00VZM-CtxYCrPLjcbL8QAGuc")
       .then((result) => {
       setItem(result.data.items) 
       }) 
      } catch (error) {
        console.log('ERROR:'+ error);
      }
    }

    dataYoutube();  
    
  }, [])
  
  console.log(item)

  return (
    <ShowsContext.Provider value={[Show, setShow]}>  
    <Router>
      <Head placeholders="Search..." onTextChange={setSearchText}/>
      <div className='body'>
      <Nav />
      
      <div className='Content'>
          <Routes>
            <Route path='/' element={<Acceuil FilterData={FilterData} data={item} />} />
            <Route path='/details/:id' element={<Details data={item} />} />
            <Route path='/Abonnements' element={<Abonnements />} />
            <Route path='/Historique' element={<Historique />} />
            <Route path='/Shorts' element={<Shorts />} />
            <Route path='/Telechargement' element={<Telechargement />} />
          </Routes>
      </div>
      </div>
    </Router>
    </ShowsContext.Provider>
  )
}

export default App