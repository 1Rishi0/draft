import Post from "../Post.js";
import { useEffect, useState } from "react";

export default function IndexPage(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://draft-api.vercel.app/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);

    return (
        <>
        {posts.length > 0 && posts.map(post => (
        <Post {...post}/>
        ))}
        </>
        
    );
}