import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function Login({ firstName, lastName }) {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    function eventHandler(event) {
        const { name, value } = event.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(loginData);
        // navigate("/home/123")
        if (loginData.email === '') {
            toast.error("email required");
        }
        else if (loginData.password === '') {
            toast.error("password required");
        }
        else {
            try {
                const response = await axios.post("https://xerocodeeassignment.onrender.com/signin", { credentials: loginData })
                console.log(response);
                if (response.status === 200) {
                    toast.success("Login success");
                    navigate(`/home/${response.data.user._id}`);
                }
                else{
                    toast.error("Login Fail");
                }
            } catch (error) {
                console.log(error);
            }
        }
        setLoginData({
            email: "",
            password: "",
        });
    }
    return (
        <div className='flex flex-col w-full h-full py-2 px-12' >
            <div className="text-center text-black text-3xl font-bold" > Welcome {firstName} {lastName}</div>
            <div className='flex justify-center items-center'>
                <div className="w-[150px] border border-slate-400 border-opacity-40"></div>
                <div className="w-[152px] h-[21px] text-center text-slate-950 text-opacity-50 text-sm font-bold capitalize leading-[21px]">Login To Your Account</div>
                <div className="w-[150px] h-[0px] border border-slate-400 border-opacity-40"></div>
            </div>
            <form className='flex flex-col gap-5 justify-center items-center h-full pt-28' onSubmit={submitHandler} >
                <input
                    className="w-full py-1 text-gray-500 bg-white rounded-lg border outline-none px-4"
                    placeholder='Email-id'
                    type='email'
                    name='email'
                    value={loginData.email}
                    onChange={(e) => eventHandler(e)}
                />
                <input
                    className="w-full py-1 text-gray-500 bg-white rounded-lg border outline-none px-4"
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={loginData.password}
                    onChange={(e) => eventHandler(e)}
                />
                <button className="w-full py-1 bg-blue-600 rounded-lg border border-stone-300 text-white">Login</button>
            </form>
            <ToastContainer />
        </div>
    )
}


export default Login;