import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import {Data, GridProps} from "./type"

 

export const Grid = (props: GridProps) =>{
    const {cards , setCards , id ,timer} = props;
    const [firstchoice , setFirstChoice] = useState<null | Data >(null)
    const [secondChoice , setSecondChoice] = useState<null | Data>(null)
    const [userTurn , setUserTurn] = useState<number>(0)
    const [toggleScore , setToggleScore] = useState(false)
    const [score , setScore] = useState<number>()

    const stopTimer = () =>{
        clearInterval(id)
    }

    const getScore = () => {
      const newScore = cards.filter(item=> item.matched=== true).length
      setScore(newScore / 2)
      console.log(newScore)
      console.log(cards.length)
      if(newScore === cards.length){
        console.log("hello inside from score")
        stopTimer()
      }
    }
    
    const handleClick = (card:Data) => {
        setToggleScore(true)
        if(firstchoice){
            setSecondChoice(card)
        }else{
            setFirstChoice(card)
        } 
    }

    //compare 2 selected cards
    useEffect(() => {
        if(firstchoice && secondChoice){
        if(firstchoice?.src === secondChoice?.src){
            setCards(prevCard => {
                return prevCard.map(card => {
                    if(card.src === firstchoice?.src){
                        return {...card , matched:true}
                    }else{
                        return card
                    }
                })
            })
            resetChoice()
        }else{
            console.log("Those cards not match")
            setTimeout(()=> resetChoice(),500)
           
        } 
    }
    getScore()
    },[firstchoice , secondChoice])

    const resetChoice = () => {
        setFirstChoice(null)
        setSecondChoice(null)
        setUserTurn(prev => prev + 1)
    }      

  return (
    <>
    <small className='timer'>Time {timer} sec.</small>
        <div className='card-grid'>
        {
            cards.map((card)=>
            <Card card={card} handleClick={handleClick}  flipped={card === firstchoice || card === secondChoice || card.matched}  />
            )
        }
    </div>
    <h3 className={toggleScore ? "show-score" : "hide-score"}>Score {score} / {cards.length/2}</h3>
    </>
  )
}
