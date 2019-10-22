import React from 'react';

const todos = [
  {description:'Learn HTML', due: '', isComplete: false},
  {description:'Learn CSS', due: '', isComplete: false},
  {description:'Learn JavaScript', due: '', isComplete: true},
];

function TodoList({isComplete}) {
  return (
    <>
      <h2>{isComplete ? 'Done' : 'To-do'}</h2>
      <ul>
        {todos
          .filter(todo => todo.isComplete === isComplete)
          .map(
            todo => 
              <li>{todo.description} 
                <button>Edit</button>
              </li>
          )
        }
      </ul>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Wunderlist 2.0</h1>
      <TodoList isComplete={false} />
      <TodoList isComplete={true} />
    </div>
  );
}

export default App;
