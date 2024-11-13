
import './App.css'
import Carousel from './components/Carousel.tsx'
import { Navbar } from './components/Navbar.tsx'
function App() {

  return (
    <>
      <div className='main'>
        <div className='header'>
          <Navbar />
        </div>

        <div className='carousell'>
          <Carousel />
        </div>



      </div>
    </>
  )
}

export default App
