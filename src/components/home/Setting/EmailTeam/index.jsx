import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '~/axios/axiosinstance';
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";
import { Button, SIZE } from "baseui/button";
import { toast } from 'react-toastify';

const TeamListComponent = ({ item,handledeleteTeam  }) => {
    const navigate = useNavigate();
  

    const handleTeamOpen = (id)=>{
        console.log("hello");
        navigate(`/setting/email/team/${id}`);
    }


    return <div className='my-4 box-shadow-custom p-5  rounded-lg' key={item._id}>
        <div className='flex items-center justify-between'>
            <h3 className='font-poppins font-bold text-gray-600'>{item.teamName}</h3>
            <div className='flex gap-x-2'>
                <ThemeProvider
                    theme={createTheme(lightThemePrimitives, {
                        colors: {
                            buttonPrimaryFill: "#ff4d4d",
                            buttonPrimaryHover: "#ff0505"
                        }

                    })}
                >
                    <Button
                        style={{ padding: "12px 20px", fontFamily: 'poppins', fontWeight: 'bold' }}
                        onClick={() => handledeleteTeam(item._id)}
                        size={SIZE.compact}>
                        Delete
                    </Button>
                </ThemeProvider>
                <ThemeProvider
                    theme={createTheme(lightThemePrimitives, {
                        colors: {
                            buttonPrimaryFill: "#212121",
                            buttonPrimaryHover: "#000000"
                        }

                    })}
                >
                    <Button
                        style={{ padding: "12px 20px", fontFamily: 'poppins', fontWeight: 'bold' }}
                        onClick={() => handleTeamOpen(item._id)}
                        size={SIZE.compact}>
                        Open
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    </div>
}



const ManageEmail = () => {

    const [email, setEmail] = useState('digisync.fast@gmail.com');
    const [password, setPassword] = useState('brabtlevhoindufc');

    const fetchEmailTeamList= ()=>{
        axiosInstance.get('/email/team').then(
            result => {
                if (result.status === 200) {
                    console.log(result.data);
                    setEmailTeam(result.data);
                }
            }
        ).catch(error => {
            console.log(error);
            if (error?.code === "ERR_NETWORK") {
                toast.error("Network Error!");
            }
            else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
                toast.error(error.response.data.message);
            }
            else {
                toast.error("Something went wrong! Please try again.");
            }
        })
    }
 
    useEffect(() => {
        fetchEmailTeamList();
    }, []);

    // For the email and secret key setting
    const handleSubmit = () => {

    }


    const [emailTeam, setEmailTeam] = useState([]);
    const [teamName, setTeamName] = useState('');

    const handleEmailTeamCreate = () => {
        if(teamName!==''){
            axiosInstance.post('/email/team', {teamName:teamName}).then(
                result => {
                    if (result.status === 201) {

                        fetchEmailTeamList();
                        toast.success("Team Created Successfully");
                    }
                }
            ).catch(error => {
                console.log(error);
                if (error?.code === "ERR_NETWORK") {
                    toast.error("Network Error!");
                }
                else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
                    toast.error(error.response.data.message);
                }
                else {
                    toast.error("Something went wrong! Please try again.");
                }
            })
        }else{
            toast.error("Please enter team name");
        }
    }

    const handledeleteTeam= (Id)=>{
        axiosInstance.delete(`/email/team/${Id}`).then(
            result => {
                if (result.status === 200) {
                    fetchEmailTeamList();
                    toast.success("Team delete Successfully");
                }
            }
        ).catch(error => {
            console.log(error);
            if (error?.code === "ERR_NETWORK") {
                toast.error("Network Error!");
            }
            else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
                toast.error(error.response.data.message);
            }
            else {
                toast.error("Something went wrong! Please try again.");
            }
        })

    }






    return <div className="flex-1">
        <div className="w-full p-10 rounded-lg border-[1px] border-b-slate-300">
            <div className='flex items-end gap-x-4'>
                <p className='text-4xl text-bold text-gray-700 font-poppins'>
                    Email Setting
                </p>
                <span className='text-2xl text-gray-600 font-poppins'>➜ Manage</span>
            </div>

            {/* Create two input field for the authetication */}
            <div className='my-[30px]'>
                <p className='font-poppins font-bold text-gray-600 text-[24px] underline'>Email Credentials</p>
                <div className='mt-[20px] flex gap-x-8'>
                    <div className="flex-[.5] flex items-center gap-x-4">
                        <label htmlFor="email" className="font-poppins font-bold text-gray-600 text-[18px]">Email:</label>
                        <input type="email" name="email" id="email" placeholder="anas@gmail.com" onChange={(e) => { setEmail(e.target.value) }} value={email} className="text-gray-700 font-poppins w-full pr-[35px] pl-[20px] py-[6px] border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]"
                        />
                    </div>

                    <div className="flex flex-[.5] items-center gap-x-4">
                        <label htmlFor="password" className="font-poppins font-bold text-gray-600 text-[18px]">Password:</label>
                        <input type="password" name="password" id="password" placeholder="*****" value={password} className="text-gray-700 w-full px-3 py-[6px] border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]" onChange={e => setPassword(e.target.value)} />
                    </div>


                    <ThemeProvider
                        theme={createTheme(lightThemePrimitives, {
                            colors: {
                                buttonPrimaryFill: "rgb(28,100,242)",
                                buttonPrimaryHover: "rgb(26,86,219)"
                            }

                        })}
                    >
                        <Button
                            style={{ padding: "12px 20px", fontFamily: 'poppins', fontWeight: 'bold' }}
                            onClick={() => handleSubmit()}
                            size={SIZE.compact}>
                            Update
                        </Button>
                    </ThemeProvider>

                </div>
            </div>

            {/*  */}
            <div className='my-6'>
                <p className='font-poppins font-bold text-gray-600 text-[24px] underline'>Teams</p>
                <div className='mt-4 flex gap-x-4'>


                    <input type="text" name="teamName" id="teamName" placeholder="Enter the name of the team" onChange={(e) => { setTeamName(e.target.value) }} value={teamName} className="flex-1 text-gray-700 font-poppins pr-[35px] pl-[20px] py-[6px] border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]"
                    />

                    <ThemeProvider
                        theme={createTheme(lightThemePrimitives, {
                            colors: {
                                buttonPrimaryFill: "rgb(28,100,242)",
                                buttonPrimaryHover: "rgb(26,86,219)"
                            }

                        })}
                    >
                        <Button
                            style={{ padding: "12px 20px", fontFamily: 'poppins', fontWeight: 'bold' }}
                            onClick={() => handleEmailTeamCreate()}
                            size={SIZE.compact}>
                            Create Team
                        </Button>
                    </ThemeProvider>


                </div>
                <section className='mt-[30px]'>
                    {
                        emailTeam.map((item) => {
                            return <TeamListComponent item={item} handledeleteTeam={handledeleteTeam} />
                        })
                    }
                </section>
            </div>

        </div>
    </div>
}
export default ManageEmail;