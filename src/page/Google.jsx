import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Google = () => {
    const { _id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const UserDataWithToken = async () => {
            try {
                const response = await axios.get(`https://xerocodeeassignment.onrender.com/options/${_id}`);
                console.log(response);
                if(response.status === 200){
                    navigate(`/home/${_id}`);
                }
                else{
                    console.log("User not found");
                }
            } catch (error) {
                console.log(error)
            }
        }
        UserDataWithToken();

    })
    return (
        <div>
            Google
        </div>
    )
}

export default Google
