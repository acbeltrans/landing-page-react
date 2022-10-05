import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home, SignIn } from './'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />{' '}
        <Route path="/signin" element={<SignIn />} exact />
      </Routes>
    </Router>
  )
}

export default App
