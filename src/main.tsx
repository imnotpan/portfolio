import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './sections/Home'
import AboutMe from './sections/AboutMe'
import NavBar from './sections/NavBar'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

const rootElement = document.getElementById('root')

if (rootElement != null) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode >
            <NavBar/>
            <Home/>
            <AboutMe/>
            <Services/>
            <Projects/>
            <Footer/>
        </React.StrictMode>
    )
} else {
    // Handle the case when the 'root' element is not found.
    console.error("Element with ID 'root' not found")
}
