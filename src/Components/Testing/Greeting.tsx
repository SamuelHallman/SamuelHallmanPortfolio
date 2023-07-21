import React from "react";

interface GreetingProps {
      name: string;
      age: number;
    }

const Greeting: React.FC<GreetingProps> = ({name, age}) => {
      return (
          <>
                <h1>Hello, {name}!</h1>
                <p>You are {age} years old.</p>
          </>
      )
    }

export default Greeting;