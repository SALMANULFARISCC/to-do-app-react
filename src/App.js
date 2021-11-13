import { useState } from 'react';
import InputField from './components/InputField';
import DeleteButton from './components/DeleteButton';
import './App.css';
import styles from './styles.module.css'



function App() {
  const [todo,setTodo] = useState();
  const [todoList,setTodoList] = useState(['sdfsdf','fsdfsdf']);
  const deleteTodo =(todoName)=>setTodoList(todoList.filter((todo)=>todo !== todoName))
  function todoOnchangeHandler(event)
  {
   setTodo(event.target.value)
  }
  const clearTodo =()=>setTodo('');
  const addTodo =()=>{
    setTodoList([...todoList,todo])
    clearTodo()
  };
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <h1 className={styles.titleText}>To do App!</h1>
        <h2 className={styles.subTitle} >Add to do</h2>



      <div className={styles.todoSection}>
      {
        todoList.map((todo)=>(
          <div className={styles.todoList}>
          <InputField todo={todo}/>
          <DeleteButton todo = {todo} onClickHandler={deleteTodo}/>
        </div>
        ))
      }

        <input type="text" value={todo} onChange={todoOnchangeHandler} className={styles.textField}/>
        <button onClick={addTodo} className={styles.addButton}>ADD</button>
      </div>
      </div>
    </div>
  )
}

export default App;
