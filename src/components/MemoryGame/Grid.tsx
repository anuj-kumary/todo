import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import {Data, GridProps} from "./type"

 

export const Grid = (props: GridProps) =>{
    const {cards , setCards} = props;
    const [firstchoice , setFirstChoice] = useState<null | Data >(null)
    const [secondChoice , setSecondChoice] = useState<null | Data>(null)
    const [userTurn , setUserTurn] = useState<number>(0)
    const [total , setTotal] = useState<number>(0)
    
    const handleClick = (card:Data) => {
        const flipped = card === firstchoice || card === secondChoice
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
    },[firstchoice , secondChoice])

    const resetChoice = () => {
        setFirstChoice(null)
        setSecondChoice(null)
        setUserTurn(prev => prev + 1)
    }

    // useEffect(()=>{
    //     const getAllTrue = () => {
    //         if(cards.map((cards)=> cards.matched === true)){
    //             setTotal(cards.length / 2)
    //         }  
    //     } 
    //     getAllTrue()
    // },[firstchoice , secondChoice])
           

  return (
    <div className='card-grid'>
        {
            cards.map((card)=>
            <Card card={card} handleClick={handleClick}  flipped={card === firstchoice || card === secondChoice || card.matched}  />
            )
        }
        <h3>Marks:- {total}</h3>
    </div>
  )
}
