import { useState } from "react";

export const LoggedIn = () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false)

      const handleLogin = () => {
            setIsLoggedIn(true)
      };
      const handelLogout = () => {
            setIsLoggedIn(false)
      };
      return (
            <div>
                  <button onClick={handleLogin}>Login</button>
                  <button onClick={handelLogout}>Logout</button>
                  <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
            </div>
      )
}