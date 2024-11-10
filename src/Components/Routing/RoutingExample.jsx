import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar';
import Card from '../Card';
import CardList from '../CardList';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Navbar />
        },
        {
            path: '/card',
            element: <CardList />
        }


    ]
);



const RoutingExample = () => {
    return (
        <>
            <h1>Hello From Routign</h1>
        </>
    )
}

export default RoutingExample