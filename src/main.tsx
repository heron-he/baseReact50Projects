import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from '@/page/pageIndex.tsx'
import {BrowserRouter} from 'react-router-dom'
import './global.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Page/>
        </BrowserRouter>
    </React.StrictMode>
)
