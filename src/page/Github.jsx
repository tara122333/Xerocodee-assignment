import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Github = () => {
    const { token } = useParams();
    console.log(token);
    useEffect(() => {
        if (token) {
            const UserDataWithToken = async () => {
                try {
                    localStorage.setItem("xerocodeeToken", JSON.stringify({ token }));
                    const response = await axios.get("http://localhost:4000/user");
                    console.log(response);
                } catch (error) {
                    console.log(error)
                }
            }
            UserDataWithToken();
        }
    },[token])
  return (
    <>

    </>

  )
}

export default Github
