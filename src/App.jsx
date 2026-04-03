import { useState } from 'react'
// import './App.css'
import Header from './assets/Componets/Header'
import Hero from './assets/Componets/Hero/Hero'
import Programs from './assets/Componets/Programs/Programs'
import Title from './assets/Componets/Title/Title'
import About from './assets/Componets/About/About'
import Campus from './assets/Componets/Campus/Campus'
import Testimonial from './assets/Componets/Testimonial/Testimonial'
import Contact from './assets/Componets/Contact/Contact'
import Footer from './assets/Componets/Footer/Footer'
import VideoPlayer from './assets/Componets/videoPlayer/videoPlayer'
function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <>
     <Header/>
     <Hero/>
     <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonial/>

        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
     </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default App
