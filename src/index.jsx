import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import { MenuItem } from './components/MenuItem.jsx'

const rootEl = document.getElementById("root")
const root = ReactDOM.createRoot(rootEl)

const router = createHashRouter([{
    path: '/',
    element: <App/>
},
{
    path: '/qa',
    element: <div>
    <MenuItem /> 
    <p className='question'>When did Steam appers?</p>
    <p className='answer'>It was launched as a software client in September 2003 to provide game updates automatically 
    for Valve's games, and expanded to distributing third-party titles in late 2005.</p>
    <p className='question'>How many games in Steam?</p>
    <p className='answer'>Steam's US library contains 92,196 titles across all categories. This includes add-on content like DLC, 
    mods and soundtracks. 50,361 games are available on Steam as of March 2021.</p>
    </div>
},
{
    
    path: '/materials',
    element: <div>
    <MenuItem /> 
    <p className='name'>Most our popular games:</p>
   <a className='links' href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/">CS:GO</a>
   <a className='links' href="https://store.steampowered.com/app/570/Dota_2/">Dota 2</a>
   <a className='links' href="https://store.steampowered.com/app/1172470/Apex_Legends/">Apex Legends</a>
   <a className='links' href="https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/">PUBG</a>
    </div>
},
   { path: '/contacts',
    element: <div>
    <MenuItem /> 
    <p className='name'>If u wanna contact us use this link:</p>
    <a className='links' href="https://help.steampowered.com/en/">Steam Support</a>
    </div>
}
])

root.render(
    <RouterProvider router={router} />
)