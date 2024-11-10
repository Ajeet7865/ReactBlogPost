import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    

    return (
        <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6">
                        <div className="flex h-full flex-col justify-between">
                            <div className="inline-flex items-center">
                            </div>
                            <div>
                                <p className="text-center text-sm text-gray-600">
                                    &copy; Copyright {new Date().getFullYear()}. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer

