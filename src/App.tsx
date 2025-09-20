import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components"

function App() {

  return (
    <>
      <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Experience/>
       <Tech/>
       <Works/>
       <Contact/>
      </div>
    </>
  )
}

export default App
