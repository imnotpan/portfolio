import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './sections/Home'
import AboutMe from './sections/AboutMe'
import NavBar from './sections/NavBar'
import Services from './sections/Services'

const rootElement = document.getElementById('root')

if (rootElement != null) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode >
            <div className='flex flex-col'>
                <Home></Home>
                <AboutMe></AboutMe>
                <Services></Services>
            </div>
        </React.StrictMode>
    )
} else {
    // Handle the case when the 'root' element is not found.
    console.error("Element with ID 'root' not found")
}
