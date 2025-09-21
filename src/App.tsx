import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components"

function App() {

  return (
    <BrowserRouter>
      <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Experience/>
       <Tech/>
       <Works/>
       <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App
