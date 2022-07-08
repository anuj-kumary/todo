import React, { useState,useEffect, useCallback } from 'react'
import { Grid } from './Grid'
import {Data} from "./type"


const cardImages = [
  {"src" : "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",matched:false},
  {"src":"https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",matched:false},
  {"src":"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",matched:false},
  {"src":"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",matched:false},
  {"src":"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", matched:false},
  {"src":"https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",matched:false}
]

export const  MemoryGame = () => {
  const [cards , setCards] = useState<Data[]>([])

  const [timer , setTimer] = useState<number>(0)
  let [id , setId] = useState<ReturnType<typeof setInterval> | undefined>()

  const time = () => {
    id = setInterval(()=>{
      setTimer((time):number => ++time)
    },1000)
    setId(id)
  }

  const suffleCards = () => {
    const cardsImage = [...cardImages , ...cardImages].sort(() => Math.random()-0.5).map((card)=>({...card, id:Math.random()}))
    setCards(cardsImage)
    setTimer(0)
    time()
  }
 

  return (
    <div className="grid-container">
      <h5 className='heading' >Memory Game</h5>
      <button className='btn-start' onClick={suffleCards}>Start</button>
    <Grid timer={timer} cards={cards} setCards={setCards} id={id} />
    
    </div>
   
  )
}
