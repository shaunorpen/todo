import React from 'react';

const initialTodos = [
  {id: 1, description:'Learn HTML', due: '', isComplete: false, isSelected: false},
  {id: 2, description:'Learn CSS', due: '', isComplete: false, isSelected: false},
  {id: 3, description:'Learn JavaScript', due: '', isComplete: true, isSelected: false},
];

function TaskList({isComplete, todos, setTodos}) {
  const toggleSelected = id => e => {
    setTodos(todos.map(todo => todo.id === id 
      ? {...todo, isSelected: !todo.isSelected} 
      : todo))
  }

  const toggleComplete = () => {
    setTodos(todos.map(todo => todo.isSelected 
      ? {...todo, isComplete: !todo.isComplete, isSelected: false} 
      : todo))
  }

  return (
    <>
      <h2>{isComplete ? 'Done' : 'To-do'}</h2>
        {todos
          .filter(todo => todo.isComplete === isComplete)
          .map(
            todo => 
              <div key={todo.id} >
                <input type='checkbox' checked={todo.isSelected} onChange={toggleSelected(todo.id)} />
                <span>{todo.description}</span> 
                <button>Edit</button>
              </div>
          )
        }
      <button onClick={toggleComplete}>Mark {isComplete ? 'Inc' : 'C'}omplete</button>
    </>
  )
}

function App() {
  const [todos, setTodos] = React.useState(initialTodos);
  return (
    <div className="App">
      <h1>Wunderlist 2.0</h1>
      <TaskList isComplete={false} todos={todos} setTodos={setTodos} />
      <TaskList isComplete={true}  todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
