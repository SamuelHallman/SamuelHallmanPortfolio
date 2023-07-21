import React, {useState} from 'react'

const Counter: React.FC = () => {
      const [count, setCount] = useState(100);

      const incremet = () => {
            setCount(count + 1);
      };

      const decrement = () => {
            setCount(count - 1);
      };

      return (
            <div>
                  <p>Count: {count}</p>
                  <button onClick={incremet}>Increment</button>
                  <button onClick={decrement}>Decrement</button>
            </div>
      )
}

export default Counter;