import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')


if (rootElement != null) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode >
            <App/>
        </React.StrictMode>
    )
} else {
    // Handle the case when the 'root' element is not found.
    console.error("Element with ID 'root' not found")
}
