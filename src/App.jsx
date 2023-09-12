import './App.css'
import {Home , About , News} from './pages/importPages'
import {Header , Footer} from "./components/import"
import { BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {

  
  return (
    <>
      <BrowserRouter basename={'/Adv-Task4'}>
        <Header/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/about' element = {<About/>}></Route>
          <Route path='/news' element = {<News/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
