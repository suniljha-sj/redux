import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Home = () => {
  const user = useSelector((state)=> state.user.value);

  console.log(user)

  return (
    <div>
      <h1>{user}</h1>
      <Link to='/change'> change</Link>
      
    </div>
  )
}

export default Home