import { useLoaderData } from "react-router-dom";


const UserDatails = () => {
    const user = useLoaderData();
    const {name , website} = user;
    const  userDatilsStyle = {
        border: '2px solid green',
        padding : '15px'
    }
    return (
        <div style={userDatilsStyle} >
            <h2>Datils  about user name :  {name}</h2>
            <p>Website : {website}</p>
        </div>
    );
};

export default UserDatails;