import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import TopCourses from './components/top_courses/TopCourses'

function App() {


  return (
    <>
     <Header></Header>
     <TopCourses></TopCourses>
    </>
  )
}

export default App
