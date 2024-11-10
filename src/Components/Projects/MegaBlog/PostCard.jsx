import React from 'react'
import { Link } from 'react-router-dom'
import dbService from './dbConfig'


function PostCard({ $id, title, img }) {

    return (
        <Link to={`/blog/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={dbService.getFilePreview(img)} alt={title}
                        className='rounded-xl' style={{ width: "500px",height:"200px" }} />

                </div>
                <h2
                    className='text-xl font-bold'
                >{title}</h2>
            </div>
        </Link>
    )
}


export default PostCard