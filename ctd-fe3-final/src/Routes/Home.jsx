import React from 'react'
import Card from '../components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* remder de las cards */}
        <Card />
      </div>
    </main>
  )
}

export default Home