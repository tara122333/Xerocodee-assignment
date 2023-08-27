import { useEffect, useState } from "react"
import logo from '../assets/logo.png'
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const Welcome = () => {
    const [steps, setSteps] = useState(1);
    const [option, setOptions] = useState('');
    const [intro, setIntro] = useState('');
    const [hosting, setHosting] = useState('');
    const [hostingOptions, setHostingOptions] = useState('');
    const [repo, setRepo] = useState([]);

    const { _id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://xerocodeeassignment.onrender.com/options/selected/data/${_id}`);
                if (response.status === 200) {
                    setHosting(response.data.selectedOptionsData.hosting)
                    setSteps(response.data.selectedOptionsData.steps)
                    setIntro(response.data.selectedOptionsData.intro);
                    setOptions(response.data.selectedOptionsData.option);
                    setHostingOptions(response.data.selectedOptionsData.hostingOptions);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [_id])

    const handleChange = async () => {
        try {
            if (intro === '') {
                alert("Enter value");

            }
            else {
                setSteps(2);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const DataSave = async () => {
        try {
            const response = await axios.post(`https://xerocodeeassignment.onrender.com/options/selected/${_id}`, { steps, intro, hosting, option, hostingOptions });
            if (response.status === 200) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }
    const gitHubOperations = async () => {
        const flag = await DataSave();
        if (flag) {
            const githubId = localStorage.getItem("githubId");
            if (githubId !== "undefined" && githubId != null) {

                const response = await axios.get(`https://xerocodeeassignment.onrender.com/options/repositories/${githubId}`)
                if(response.status === 200){
                    setRepo(response.data.repositories)
                }
                else if(response.status === 201){
                    alert(response.messsage);
                }
                else{
                    console.log("error");
                }
            }
            else {
                
                (window.location.href = `https://xerocodeeassignment.onrender.com/auth/github`);
            }
        }

    }
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-screen bg-blue-200">
                <div className="bg-white flex flex-col gap-5 rounded-2xl h-2/3 w-2/3 py-6">
                    <div className="flex flex-col gap-4">
                        <div className='w-full flex justify-center items-center'>
                            <div className='w-35 h-[47.06px] flex'>
                                <img src={logo} alt='' className="w-full h-full" />
                            </div>
                        </div>
                        <div className="flex flex-col py-2">
                            <h1 className="w-full text-center text-black text-3xl font-bold"> Welcome! Tara Chand Kumawat</h1>
                            <div className='flex justify-center items-center py-2'>
                                <div className="w-[150px] border border-slate-400 border-opacity-40"></div>
                                <div className="w-[202px] h-[21px] text-center text-slate-950 text-opacity-50 text-sm font-bold capitalize leading-[21px]">Choose from the following</div>
                                <div className="w-[150px] h-[0px] border border-slate-400 border-opacity-40"></div>
                            </div>
                        </div>
                    </div>
                    {
                        steps === 1 ? (
                            <>
                                <div className="flex flex-col gap-8">
                                    <div className="flex gap-8 items-center justify-center w-full">
                                        <div className="flex justify-center items-center">
                                            <span className={option === 'developer' ? "px-16 flex justify-center items-center text-xl py-2 bg-[#1F64FF] text-white rounded border-2 border-[#1F64FF] cursor-pointer" : "px-16 flex justify-center items-center text-slate-950 text-xl py-2 border-2 rounded cursor-pointer"}
                                                onClick={() => {
                                                    setOptions('developer')
                                                    setIntro('');
                                                    setSteps(2);
                                                }}
                                            >Developer</span>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <span className={option === 'organisation' ? "px-16 flex justify-center items-center text-xl py-2 bg-[#1F64FF] text-white rounded border-2 border-[#1F64FF] cursor-pointer" : "px-16 flex justify-center items-center text-slate-950 text-xl py-2 border-2 rounded cursor-pointer"}
                                                onClick={() => {
                                                    setOptions('organisation')
                                                    setIntro('');
                                                }}
                                            >Organisation</span>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <span className={option === 'company' ? "px-16 flex justify-center items-center text-xl py-2 bg-[#1F64FF] text-white rounded border-2 border-[#1F64FF] cursor-pointer" : "px-16 flex justify-center items-center text-slate-950 text-xl py-2 border-2 rounded cursor-pointer"}
                                                onClick={() => {
                                                    setOptions('company');
                                                    setIntro('');
                                                }}
                                            >Company</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-center w-full justify-center py-12">
                                        {
                                            option === 'organisation' ? <>
                                                <div>
                                                    <input
                                                        type="text"
                                                        placeholder={"Organisation Name"}
                                                        className="w-80 border text-gray-600 outline-none rounded px-5 py-2 font-medium"
                                                        value={intro}
                                                        onChange={(e) => setIntro(e.target.value)}
                                                    />
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <span className="px-5 cursor-pointer py-2 bg-blue-600 rounded text-white"
                                                        onClick={handleChange}
                                                    >
                                                        SUBMIT
                                                    </span>
                                                </div>
                                            </> : option === 'company' ? <>
                                                <div>
                                                    <input
                                                        type="text"
                                                        placeholder={"Company Name"}
                                                        className="w-80 border text-gray-600 outline-none rounded px-5 py-2 font-medium"
                                                        value={intro}
                                                        onChange={(e) => setIntro(e.target.value)}
                                                    />
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <span className="cursor-pointer px-5 py-2 bg-blue-600 rounded text-white"
                                                        onClick={handleChange}
                                                    >
                                                        SUBMIT
                                                    </span>
                                                </div>
                                            </> : ''
                                        }
                                    </div>
                                </div>
                            </>
                        ) : steps === 2 ? (
                            <>
                                <div className="flex flex-col gap-8">
                                    <div className="flex gap-8 items-center justify-center w-full">
                                        <div className="flex justify-center items-center">
                                            <span className={hosting === 'self' ? "px-16 flex justify-center items-center text-xl py-2 bg-[#1F64FF] text-white rounded border-2 border-[#1F64FF] cursor-pointer" : "px-16 flex justify-center items-center text-slate-950 text-xl py-2 border-2 rounded cursor-pointer"}
                                                onClick={() => {
                                                    setHosting('self')
                                                    setSteps(3)
                                                }}
                                            >Self Hosting</span>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <span className={hosting === 'xerocodee' ? "px-16 flex justify-center items-center text-xl py-2 bg-[#1F64FF] text-white rounded border-2 border-[#1F64FF] cursor-pointer" : "px-16 flex justify-center items-center text-slate-950 text-xl py-2 border-2 rounded cursor-pointer"}
                                                onClick={() => {
                                                    setHosting('xerocodee')
                                                }}
                                            >XeroCodee Hosting</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : steps === 3 ? (
                            <>
                                {
                                    hosting === 'self' && <div className="flex flex-col gap-8">
                                        <div className="flex gap-8 items-center justify-center w-full">
                                            <div className="flex justify-center items-center">
                                                <span className={hostingOptions === 'aws' ? "px-16 flex justify-center items-center text-xl py-2 bg-[#1F64FF] text-white rounded border-2 border-[#1F64FF] cursor-pointer" : "px-16 flex justify-center items-center text-slate-950 text-xl py-2 border-2 rounded cursor-pointer"}
                                                    onClick={() => {
                                                        setHostingOptions('aws')
                                                    }}
                                                >AWS</span>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <span className={hostingOptions === 'github' ? "px-16 flex justify-center items-center text-xl py-2 bg-[#1F64FF] text-white rounded border-2 border-[#1F64FF] cursor-pointer" : "px-16 flex justify-center items-center text-slate-950 text-xl py-2 border-2 rounded cursor-pointer"}
                                                    onClick={() => {
                                                        setHostingOptions('github')
                                                        gitHubOperations();
                                                    }}
                                                >GitHub</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center w-full justify-center py-2">
                                            {
                                                hostingOptions === 'github' ? <>
                                                    <div className="h-40 overflow-y-scroll py-2">
                                                        {
                                                            repo.map((item)=>(
                                                                <Link to={item.clone_url} target="__blank" className="flex gap-5 border py-1 px-3 hover:bg-red-100"
                                                                >
                                                                    <h1><span className="font-bold">Repo Name </span>: {item.name}</h1>
                                                                    <h1><span className="font-bold">Repo Url</span> : {item.clone_url}</h1>
                                                                </Link>
                                                            ))
                                                        }
                                                    </div>
                                                </> : ''

                                            }
                                        </div>
                                    </div>
                                }

                            </>
                        ) : steps === 4 ? (
                            <>
                                <div className="flex w-full border h-64">
                                    <h1>Github Repo</h1>
                                </div>
                            </>
                        ) : (
                            <>

                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Welcome
