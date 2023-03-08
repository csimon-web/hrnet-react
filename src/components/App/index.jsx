import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import EmployeesList from '../../pages/EmployeesList'
import NoMatch from '../../pages/NoMatch'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees-list" element={<EmployeesList />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
