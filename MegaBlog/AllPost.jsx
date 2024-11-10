import React, { useState, useEffect } from 'react'
import dbService from "./dbConfig";
import Container from './Container';
import PostCard from './PostCard';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        dbService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, []);

    return (
        <div className='w-full py-8'>
            <Container>
                <h1 className="text-2xl font-bold text-center">All Posts</h1>
                <br />
                <hr />
                <br />
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts