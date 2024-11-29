import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessage()
  }, [])

  const fetchMessage = async () => {
    try {
      const response = await fetch('/api/hello')
      const data = await response.json()
      setMessage(data.message)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching message:', error)
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <h1>Vite + React + Netlify Functions</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  )
}

export default App 