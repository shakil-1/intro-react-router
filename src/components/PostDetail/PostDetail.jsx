import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetail = () => {
   const navigate = useNavigate();
    const postDatil = useLoaderData();
    const {postId} = useParams();
    console.log(postId);
    
    const {body, id} = postDatil;
    const  postDetail = {
        border: '2px solid green',
        padding : '15px',
        width: '450px',
        marginTop: '20px'
    }
    const  handelGoBack = () =>{
        navigate(-1)
    }
    return (
        <div style={postDetail}>
            <h2>Post id : {id}</h2>
            <h2>User Post detail :{body} </h2>
            <button onClick={handelGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;