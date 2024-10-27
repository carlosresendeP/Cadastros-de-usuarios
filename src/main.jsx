import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles.js'

import ListUsers from './pages/ListUsers/index.jsx'

import Home from './pages/home/index.jsx' //default -. ESSE É PARA UM SÓ
//import { App, App2 } from './App.jsx' -> esse é para vario exports

//para renomear faça assim acima 'App2 as abacate(nome)'

import {RouterProvider} from "react-router-dom"
import Router from "./routes.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={Router}/>
  </StrictMode>,
)
