import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

import Projects from './pages/Projects/Projects'
import Resume from './pages/Resume/Resume'
import Contact from './pages/Contact/Contact'

import style from './app.module.css'


export default function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
  })
    return (
        <div className={!scroll ? `${style.app}` : `${style.app} ${style.no_scroll}`}>
          <Header windowSize={windowSize} setScroll={setScroll}/>
            <Routes>
              <Route path="/dev-portfolio/" element={<Main />} />
              <Route path="/dev-portfolio/projects" element={<Projects />} />
              <Route path="/dev-portfolio/resume" element={<Resume windowSize={windowSize}/>} />
              <Route path="/dev-portfolio/contact" element={<Contact />} />
            </Routes>
          <Footer />
        </div>
    )
}

