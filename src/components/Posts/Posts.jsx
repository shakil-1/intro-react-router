import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";



const Posts = () => {
    const posts = useLoaderData();
    const postsStyle = {
        display:'grid',
        gridTemplateColumns:' repeat(4, 1fr)',
    }
    return (
        <div>
            <h2>Posts  Data : {posts.length}</h2>
            <div style={postsStyle}>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }</div>
        </div>
    );
};

export default Posts;