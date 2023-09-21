import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const navigate = useNavigate();
    const {body, title, id} = post;
    const handelShowdetail = () =>{
navigate(`/post/${id}`)
    }

    return (
        <div style={{
            border: '2px solid yellow',
            margin: '15px',
            padding: '10px',
        }}>
           <h2>Post id {id}</h2>
            <h2>Title : {title}</h2>
           <Link to={`/post/${id}`}>Post Detail</Link>
           <Link to={`/post/${id}`}>
           <button onClick={handelShowdetail}>Click to see Detail</button>
           </Link>
         
        </div>
    );
};

export default Post;