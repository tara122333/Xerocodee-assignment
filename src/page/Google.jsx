import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Google = () => {
    const { _id } = useParams();
    console.log("_id");
    console.log(_id);
    const navigate = useNavigate();
    useEffect(() => {
        const UserDataWithToken = async () => {
            try {
                // localStorage.setItem("xerocodeeToken", JSON.stringify({ token }));
                const response = await axios.get(`http://localhost:4000/options/${_id}`);
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

    }, [_id])
    return (
        <div>
            Google
        </div>
    )
}

export default Google
