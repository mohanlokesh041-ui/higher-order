import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const user = ()=> {
        navigate("user/11/Mohan");

        

    };



  return (
   <>
<div>
    <h1>Home Page</h1>
    <button onClick={user}>Click Me</button>
</div>
   </>
  )
}

export default Home