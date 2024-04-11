import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='dark:text-white dark:bg-slate-900'>
     <App/>
    </div>
  </BrowserRouter>
)
