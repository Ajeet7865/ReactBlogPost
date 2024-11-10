import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'
import Container from './Container'
import LogoutBtn from './LogoutBtn'


function Header() {
    const authStatus = useSelector((state) => state.appwriteauth.status)
    const navigate = useNavigate()
    const navItems = [
        {
            name: 'Home',
            slug: "/blog/blog",
            active: true
        },
        {
            name: "Login",
            slug: "/blog/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/blog/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/blog/allposts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/blog/addpost",
            active: authStatus,
        },
    ]


    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/blog/blog'>
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                    >{item.name}</button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header