import React from 'react'

export const Card = ({card, handleClick,flipped}) => {
  return (
    <div className="card">
    <div className = {flipped ? "flipped" : "" }>
    <img className='front' src={card.src} alt="front" />
    <img className='back' onClick={() => handleClick(card)} src='https://cairowestmag.com/wp-content/uploads/2016/11/memory.png' alt='back' />
    </div>
    </div>
  )
}
