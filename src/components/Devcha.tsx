import React, { useEffect, useState } from 'react'

export const Devcha = ()  => {

  const [inputCaptch , setInputCaptch] = useState<string>("")
  const [devcha , setDevcha] = useState<string>("")
  const [msg, setMsg] = useState<string>("")


  const clickHandler = () => {
    if(devcha === ""){
      setMsg("Call getDevcha function to get you devcha code")
    }
    else if(inputCaptch === devcha && inputCaptch !== ""){
      setMsg("Hurray!!! You solve this Devcha Succesfully!!")
      setDevcha("")
    }else{
      setMsg("Sorry!!! Try later")
     
    }
    setInputCaptch("")
  }

const getHintHandler = () => {
  setMsg("Call getDevcha function to get you devcha code")
}

  const getDevcha = () => {
    const devcha:string = Math.random().toString(36).substring(2,8)
    setDevcha(devcha)
    console.log(`%c${devcha}`, "color:green; font-weight:700; font-size:3rem;")
  }


  useEffect(()=>{
    window.getDevcha  = getDevcha;
  },[])

  return (
    <>
    <div className='container'>
    <p>Prove that you are a developer!</p>
    <h2 className='heading'>Devcha</h2>
    <small>Enter Your DEVCHA <span data-testid='hintBtn' className='hint-btn' onClick={getHintHandler}>Hint</span></small>
    <br />
    <input data-testid='input' className='input-txt' value={inputCaptch} onChange={(e)=>setInputCaptch(e.target.value)} type="text" />
    <button data-testid="clickBtn" className='btn' onClick={clickHandler}>Submit</button>
    <p className='name' data-testid="message">{msg}</p>
    </div>
   
    </>
  )
}
