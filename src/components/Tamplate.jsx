import React, { useState } from 'react'
import imageSrc from '../assets/bgImage.png';
import logo from '../assets/logo.png'
import Vector from '../assets/Vector.jpg'
import SignUp from './SignUp';
import Login from './Login';

export default function Template() {
    const [firstName, setFirstName] = useState("");
    const [signUp, setSignUp] = useState(false);
    const [formType, setFormType] = useState(false);
    const [lastName, setLastName] = useState("");
    return (
        <div className="bg-white flex rounded-tr-2xl rounded-bl-2xl pt-4">
            <div className='flex  items-center justify-center pl-12'>
                <div className='flex justify-center items-center flex-col w-full gap-4'>
                    <div className='w-full flex px-40 items-center'>
                        <div className='w-35 h-[47.06px] flex'>
                            <img src={logo} alt='' className="w-full h-full" />
                        </div>
                    </div>
                    <div className='flex w-full gap-3'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <div className=''>
                                {formType === false ?
                                    (<SignUp setSignUp={setSignUp} setFirstName={setFirstName} setLastName={setLastName} />) :
                                    (<Login firstName={firstName} lastName={lastName} />)
                                }
                            </div>
                            <div className="w-full h-5 text-center text-slate-950 text-opacity-50 text-sm font-extrabold capitalize leading-[21px]">OR</div>
                            <div className='flex w-full justify-evenly'>
                                <button className="bg-white rounded-lg border flex justify-center items-center py-1 text-sm px-4" >
                                    {formType === false ? ("Sign Up") : ("Log In")}
                                    With Google
                                    <img className="w-6 h-6 ml-2" alt=""
                                        src={'https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png'}
                                    />
                                </button>
                                <button className="bg-white rounded-lg border flex justify-center items-center py-1 text-sm px-4">
                                    {formType === false ? ("Sign Up") : ("Log in")}
                                    With Github
                                    <img className="w-6 h-6 ml-2" alt=''
                                        src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} />
                                </button>
                            </div>
                            <div className="w-56 h-[19px] mx-auto"><span className="text-slate-950 text-opacity-50 text-sm font-normal leading-[21px] ">Already have an Account ? </span>
                                <span className="text-blue-600 text-sm font-medium cursor-pointer" 
                                onClick={()=>{setFormType(!formType)}}
                                >{formType === true ? ("Sign Up") : ("Log in")}</span>
                            </div>
                        </div>
                        <div className='border-l-2 flex w-1/2 items-center justify-center'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={imageSrc} alt='' className='h-[320px] my-auto mx-auto' />
                                <img src={Vector} alt='' className='h-40 w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}