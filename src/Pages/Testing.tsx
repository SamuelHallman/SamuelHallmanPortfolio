import Navigation from '../Components/Navigation'
// import Greeting from '../Components/Greeting'
import Todo from '../Components/Testing/Todo'
import Counter from '../Components/Testing/Counter'
import { User } from '../Components/Testing/State/User'

const TodoList: React.FC = () => {
  
  
  return (
      <>
            <Navigation />
            <User />
            <Counter />
            {/* <Greeting name='Samuel' age={23} /> */}
            <Todo id={1} text='Buy groceries' completed={false} />
            <Todo id={2} text='Buy groceries' completed={true} />
            <Todo id={3} text='Buy groceries' completed={true} />
      </> 
  )
}
export default TodoList;