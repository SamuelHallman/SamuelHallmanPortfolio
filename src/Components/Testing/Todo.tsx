import React from 'react'

interface TodoItemProps {
      id: number;
      text: string;
      completed: boolean;
}

function TodoList(props:TodoItemProps){
      return(
            <>
                  <input type="checkbox" checked={props.completed}  />
                  <span style={{ textDecoration: props.completed ? 'line-through' : 'none' }}>{props.text}</span>
            </>
      )
}

// function TodoList({id, text, completed}:TodoItemProps){
//       return(
//             <>
//                   <input type="checkbox" checked={completed}  />
//                   <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
//             </>
//       )
// }
// const TodoList: React.FC<TodoItemProps> = ({id, text, completed}) => {
//       return (
//             <>
//             <input type="checkbox" checked={completed}  />
//             <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
//             </>
//       )
// }

export default TodoList;
