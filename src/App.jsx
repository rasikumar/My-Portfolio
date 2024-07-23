import Hero from './components/Hero'
import Lenis from 'lenis'

const App = () => {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  
  return (
    <>
      <Hero/>
    </>
  )
}

export default App

