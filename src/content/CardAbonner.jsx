import React from 'react'
import '../styles/CardAbonner.scss'

const CardAbonner = () => {
  return (
    <div className='Card'>
    <div className='CardAbonner'>
        <div className="img"></div>
        <div className="chaine">Vogue</div>
        <div className="abonne">14 M d'abonnes</div>
        <input type="button" className='btnAbonner' value="S'abonner" />
    </div>
    
    </div>
  )
}

export default CardAbonner