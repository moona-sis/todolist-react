import React, {useState} from 'react';
import './App.css';
import Navbar from './componenents/Navbar'


function App() {
const [input, setInput] = useState('')
const [todo, setTodo] = useState ([])
console.log(todo)
const handleAddTodo = ()=> {
  if (input === ''){
    alert ('please insert a todo')
  }else{
    const todolist =[...todo, input]
    setTodo (todolist)
  }
}
console.log(input)
  
  const removeItem=(index)=>{
    console.log(index)
    const removeItem = todo.filter(td => todo.indexOf(td) !== index)
    setTodo(removeItem)
  }
  return (
    <div className="app">
      <Navbar title = 'Todo app'/>
      <div className='container'>
        <div>
      
      <input onChange={(e)=> setInput(e.target.value)} type ='text' placeholder='add todo here'/>
      <button onClick={handleAddTodo} type='submite'>Add</button>
      </div>
      <div className='content'>
  {todo.map((td,index) =>(<div className='list' key={index}>
   <div className='todo' >{td} </div>
    <div onClick={()=>removeItem (todo.indexOf(td))} className='close'>X</div>
    
  </div>
  
  
  )) }
  </div>
  
 
  </div>
     
    </div>
  );
}

export default App;
