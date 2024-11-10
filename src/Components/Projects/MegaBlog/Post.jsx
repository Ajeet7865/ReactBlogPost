import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dbService from "./dbConfig";
import Container from './Container';
import Button from './Button';
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.appwriteauth.userData);

    const isAuthor = post && userData ? post.user_id === userData.$id : false;

    useEffect(() => {
        if (slug) {
            dbService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/blog/blog");
            });
        } else navigate("/blog/blog");
    }, [slug, navigate]);

    const deletePost = () => {
        const isConfirm = window.confirm("Are you sure you want to delete this post?");
        if (isConfirm) {
            dbService.deletePost(post.$id).then((status) => {
                if (status) {
                    dbService.deleteFile(post.img);
                    navigate("/blog/blog");
                }
            });
        }
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={dbService.getFilePreview(post.img)}
                        alt={post.title}
                        className="rounded-xl"
                        style={{ width: "300px" }}
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/blog/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}