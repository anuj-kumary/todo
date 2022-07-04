import React, { useState, useRef } from 'react'

export const TodoList = ()  => {
    const [toggle, setToggle] = useState(true);
    const [todoList , setTodoList] = useState([])
    const [text , setText] = useState("")
    const [editID , setID] = useState(null)

    const clickHandler = (e) => {
       e.preventDefault()
       
       const formData = new FormData(e.target);
       let formProps = Object.fromEntries(formData);
        if(text && !toggle){
            setTodoList(
                todoList.map((data)=>{
                    if(data.id === editID ){
                        return {...data , todo:formProps.todo}
                    }
                    return data
                })
            )
            e.target[0].value = ""
            setToggle(true)
        }
        else{
            const data = {id:Date.now(), todo:formProps.todo}
            setTodoList([...todoList , data])
            e.target[0].value = ""
        }
     
    }

   const editHandler = (id , e) => {
        const editValue = todoList.find((elem) => {
            return elem.id === id;
          });
          console.log(e)
          console.log(editValue.todo)
          setToggle(false);
          setID(editValue.id)
   }

   const deleteHandler = (id) => {
    const deleteItems = todoList.filter((elem) => {
        return elem.id !== id;
      });
      setTodoList(deleteItems)
   }

  return (
    <>
    <form onSubmit={(e) => clickHandler(e)}>
    <input className='input-txt' type="text" id='todo' name = "todo" required />

     <input className='btn' type="submit"
        value={toggle ? "Add" : "Edit"} name="Submit" />
  

    {
        todoList.map((text) => 
        {
            return(
            <div key={text.id}>
            <li>{text.todo}</li>

     <input className='edit-btn' onClick={(e)=>editHandler(text.id , e)}  type="submit"
        value="Edit" name="Submit" />

     <input className='delete-btn' onClick={()=>deleteHandler(text.id)} type="submit"
        value="Delete" name="Submit" />

            {/* <button className='edit-btn' onClick={(e)=>editHandler(text.id , e)}>Edit</button>
            <button className='delete-btn' onClick={()=>deleteHandler(text.id)}>Delete</button> */}
            </div>
            )
        }
        )
       
    }
    </form>
   </>
  )
}
