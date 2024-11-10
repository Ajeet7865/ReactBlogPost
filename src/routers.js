//import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import CardList from './Components/CardList.jsx'
import UseStateHook from './Components/UseStateHook.jsx'
import StateLifting from './Components/StateLifting.jsx'
import DynamicStyleColor from './Components/DynamicStyleColor.jsx'
import ConditionalRendering from './Components/ConditionalRendering.jsx'
import EventHandling from './Components/EventHandling.jsx'
import { createBrowserRouter } from "react-router-dom";
import NotFound from './Components/NotFound.jsx'
import Gallery from './Components/Gallery.jsx'
import UseEffectHook from './Components/UseEffectHook.jsx'
import UseEffectHookTimer from './Components/UseEffectHookTimer.jsx'
import UseEffectDataFetch from './Components/UseEffectDataFetch.jsx'
import Home from './Components/Home.jsx'
import UseParams from './Components/Routing/UseParams.jsx'
import { UseNavigateHook } from './Components/Routing/UseNavigateHook.jsx'

// This is New Approch
const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /><Home /></>,
    },
    {
        path: "/card",
        element: <><Navbar /><CardList /></>,
        children: [  // Iska Use Nested Route Dene Ke Liye Krte Hain
            {
                path: 'one',
                element: <><h1>Card One From Sub Route</h1> </>
            },
            {
                path: 'two',
                element: <> <h1>Card Two From Sub Route</h1> </>
            }
        ]
    },
    {
        path: "/usestatehook",
        element: <><Navbar /><UseStateHook /></>,
    },
    {
        path: "/statelifting",
        element: <><Navbar /><StateLifting /></>,
    },
    {
        path: "/dynamiccolor",
        element: <><Navbar /><DynamicStyleColor /></>,
    },
    {
        path: "/conditionalrendering",
        element: <><Navbar /><ConditionalRendering /></>,
    },
    {
        path: "/eventhandling",
        element: <><Navbar /><EventHandling /></>,
    },
    {
        path: "/gallery",
        element: <><Navbar /><Gallery /></>,
    },
    {
        path: "/useeffecthook",
        element: <><Navbar /><UseEffectHook /></>,
    },
    {
        path: "/useeffecttimer",
        element: <><Navbar /><UseEffectHookTimer /></>,
    },
    {
        path: "/useeffectdatafetch",
        element: <><Navbar /><UseEffectDataFetch /></>,
    },
    {
        path: "/usecontexthook",
        element: <><Navbar /><UseContextHook /></>,
    },
    {
        path: "/useparams/:id",  // UseParams Hook 
        element: <><Navbar /><UseParams /></>,
    },
    {
        path: "/usenavigate",
        element: <><Navbar /><UseNavigateHook /></>,
    },
    {
        path: "*",
        element: <><Navbar /><NotFound /></>,
    },
]);

export { router }