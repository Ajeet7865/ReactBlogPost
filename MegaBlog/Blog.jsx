import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './auth';
import { login, logout } from './authSlice';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Blog = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                }
                else {
                    dispatch(logout());
                }
            })
            .finally(() => { setLoading(false) });

    }, [])

    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);


    return !loading ? (
        <>
           <div className="container">
            <Header/>
            <main>
                <Outlet/> 
            </main>
            <Footer/>
           </div>
        </>

    ) : (null)
    
}

export default Blog