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
                if (response.status === 200) {
                    navigate(`/home/${_id}`);
                }
                else {
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
            <h1>Wait for some time server speed are slow.. auto redirect after some time....</h1>
        </div>
    )
}

export default Google
