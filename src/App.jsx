import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import DetailPage from './pages/DetailPage'
import Home from './pages/Home'

function App() {

  return (
    <div className="wrap">
      <Header />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
      </main>

      <footer className='footer'>
        <small>&copy; {new Date().getFullYear()} KOREA CULTURE ARCHIVE</small>
      </footer>
    </div>
  )
}

export default App
