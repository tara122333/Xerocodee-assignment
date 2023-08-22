import React, { useState } from 'react'

function SignUp({ setSignUp, setFirstName, setLastName }) {

    const [signUpData, setSignUpData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    function eventHandler(event) {
        const { name, value } = event.target;
        setSignUpData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    function submitHandler(e) {
        e.preventDefault();
        setFirstName(signUpData.firstName);
        setLastName(signUpData.lastName);
        console.log(signUpData);
        setSignUpData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
        setSignUp(true);

    }
    return (
        <div className='flex flex-col' >
            <h1 className="w-full text-center text-black text-3xl font-bold"> Hello!</h1>
            <div className='flex justify-center items-center py-1'>
                <div className="w-[150px] border border-slate-400 border-opacity-40"></div>
                <div className="w-[152px] h-[21px] text-center text-slate-950 text-opacity-50 text-sm font-bold capitalize leading-[21px]">Create your Account</div>
                <div className="w-[150px] h-[0px] border border-slate-400 border-opacity-40"></div>
            </div>
            <form className='flex flex-col gap-4' onSubmit={submitHandler} >
                <input
                    className="w-full py-1 text-gray-500 bg-white rounded-lg border outline-none px-4"
                    placeholder='First Name'
                    type='text'
                    name='firstName'
                    value={signUpData.firstName}
                    onChange={(e) => eventHandler(e)}
                >
                </input>
                <input
                    className="w-full py-1 text-gray-500 bg-white rounded-lg border outline-none px-4"
                    placeholder='Last Name'
                    type='text'
                    name='lastName'
                    value={signUpData.lastName}
                    onChange={(e) => eventHandler(e)}
                />
                <input
                    className="w-full py-1 text-gray-500 bg-white rounded-lg border outline-none px-4"
                    placeholder='Email-id'
                    type='email'
                    name='email'
                    value={signUpData.email}
                    onChange={(e) => eventHandler(e)}
                />
                <input
                    className="w-full py-1 text-gray-500 bg-white rounded-lg border outline-none px-4"
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={signUpData.password}
                    onChange={(e) => eventHandler(e)}
                />
                <input
                    className="w-full py-1 text-gray-500 bg-white rounded-lg border outline-none px-4"
                    placeholder='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    value={signUpData.confirmPassword}
                    onChange={(e) => eventHandler(e)}
                />
                <button className="w-full py-1 bg-blue-600 rounded-lg border border-stone-300 text-white">Sign Up</button>
            </form>
        </div>
    )
}
export default SignUp;