import React from 'react'
import { CardsProps } from './type'

export const Card = (props:CardsProps ) => {
  const {card, handleClick,flipped} = props
  return (
    <div className="card">
    <div className = {flipped ? "flipped" : "" }>
    <img className='front' src={card.src} alt="front" />
    <img className='back' onClick={() => handleClick(card)} src='https://e7.pngegg.com/pngimages/541/468/png-clipart-clown-illustration-joker-playing-card-graphy-red-clown-heroes-happy-birthday-vector-images.png' alt='back' />
    </div>
    </div>
  )
}
