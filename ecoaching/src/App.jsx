import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import TopCourses from './components/top_courses/TopCourses'

function App() {


  return (
    <div>
      <Header></Header>
      <TopCourses></TopCourses>
    </div>
    
  )
}

export default App
