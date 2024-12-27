import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Getproposal from './components/Dashboard/Getproposal.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import ProposalForm from './components/Dashboard/Proposalform.jsx'
import { Route } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='proposalform' element={<ProposalForm/>}/>
        <Route path='getproposal' element={<Getproposal/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
