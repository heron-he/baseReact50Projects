import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from '@/page/pageIndex.tsx'
import {BrowserRouter} from 'react-router-dom'
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyle/>
        <BrowserRouter>
            <Page/>
        </BrowserRouter>
    </React.StrictMode>
)
