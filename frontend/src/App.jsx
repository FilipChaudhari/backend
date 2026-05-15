import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setjokes(response.data)
      })
      .catch(error => {
        console.error('Error fetching jokes:', error)
      })
  }, [])

  return (
    <>
      <h1>Chai Or Full  Stack Created by Prince </h1>
      <p>JOKES : {jokes.length}</p>
      {
        jokes.map((joke, index) => {
          return(
          <div key={index}>
            {joke}
            </div>
          )
        })
      }
    </>
  )
}

export default App
