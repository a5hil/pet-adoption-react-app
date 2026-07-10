import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPet from './Components/AddPet'
import ViewPet from './Components/ViewPet'
import SearchPet from './Components/SearchPet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddPet />} />
          <Route path='/search-pets' element={<SearchPet />} />
          <Route path='/view-pets' element={<ViewPet />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
