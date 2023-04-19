import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '~/axios/axiosinstance';
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";
import { Button, SIZE } from "baseui/button";
import { toast } from 'react-toastify';

const EmailListComponent = ({ item, handledeleteMember }) => {

    return <div className='my-4 box-shadow-custom p-5  rounded-lg' key={item._id}>
        <div className='flex items-center justify-between'>
            <h3 className='font-poppins font-bold text-gray-600'>{item.name}<span className='font-normal'>__{item.email}</span></h3>
            <div className='flex gap-x-2'>

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
                        size={SIZE.compact}>
                        Edit
                    </Button>
                </ThemeProvider>

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
                        onClick={() => handledeleteMember(item._id)}
                        size={SIZE.compact}>
                        Delete
                    </Button>
                </ThemeProvider>

            </div>
        </div>
    </div>
}

const AddTeamMembers = () => {
    // form field State
    const [memberName, setMemberName] = useState('');
    const [memberEmail, setMemberEmail] = useState('');
    const [memberList, setMemberList] = useState({ teamName: '', emailList: [] });
    const params = useParams();

    const fetchEmailList = () => {
        axiosInstance.get(`/email/team/${params.id}`).then(
            result => {
                if (result.status === 200) {
                    setMemberList(result.data);
                    console.log(result.data);
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
        fetchEmailList();
    }, []);

    const handleValidateInput = (name, email) => {
        if(name===''){
            toast.error("Please Enter Member Name");
            return false;
        }
        if(email===''){
            toast.error("Please Enter Member Email");
            return false;
        }
        if(!memberEmail.includes('@')){
            toast.error("Please Enter Valid Email");
            return false;
        }
        if(name.length<4){
            toast.error("Please Enter Valid Name");
            return false;
        }
        return true;
    }


    const handleAddTeamMember = () => {
       if(handleValidateInput(memberName,memberEmail)){

           const data = {
               "teamId": params.id,
               "memberName": memberName,
               "memberEmail": memberEmail
           };
           axiosInstance.patch(`/email/team`, data).then(
               result => {
                   if (result.status === 200) {
                       fetchEmailList();
                       toast.success("Member Added Successfully!");
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

    }

    const handledeleteMember = (id) => {
        const data = {
            "teamId": params.id,
            "_id": id
        };
        axiosInstance.delete(`/email/team`, {data:data} ).then(
            result => {
                if (result.status === 200) {
                    fetchEmailList();
                    toast.success("Member Deleted Successfully!");
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



    return <div className='my-6'>
        <p className='font-poppins font-bold text-gray-600 text-[24px] underline'>{memberList.teamName}</p>
        <div className='mt-4 flex gap-x-4'>


            <input type="text" name="memberName" placeholder="Enter the Name" onChange={(e) => { setMemberName(e.target.value) }} value={memberName} className="flex-1 text-gray-700 font-poppins pr-[35px] pl-[20px] py-[6px] border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]"
            />

            <input type="email" name="memberName" placeholder="Enter the member Email" onChange={(e) => { setMemberEmail(e.target.value) }} value={memberEmail} className="flex-1 text-gray-700 font-poppins pr-[35px] pl-[20px] py-[6px] border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]"
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
                    onClick={() => handleAddTeamMember()}
                    size={SIZE.compact}>
                    Add Member
                </Button>
            </ThemeProvider>


        </div>
        <section className='mt-[30px]'>
            {
                memberList?.emailList.map((item) => {
                    return <EmailListComponent item={item} handledeleteMember={handledeleteMember} />
                })
            }
        </section>
    </div>
}



const Manageteams = () => {

    const navigate = useNavigate();

    return (
        <div className="flex-1">
            <div className="w-full p-10 rounded-lg border-[1px] border-b-slate-300">
                <div className='flex items-center justify-between'>
                    <div className='flex items-end gap-x-4'>
                        <p className='text-4xl text-bold text-gray-700 font-poppins'>
                            Team Member
                        </p>
                        <span className='text-2xl text-gray-600 font-poppins'>➜ Manage</span>
                    </div>
                    <ThemeProvider
                        theme={createTheme(lightThemePrimitives, {
                            colors: {
                                buttonPrimaryFill: "#212121",
                                buttonPrimaryHover: "#000000"
                            }

                        })}
                    >
                        <Button
                            style={{ padding: "10px 20px", fontFamily: 'poppins', fontWeight: 'bold' }}
                            onClick={() => navigate('/setting/email/manage')}
                            size={SIZE.compact}>
                            <span className='mr-[6px] text-[18px] mb-[3px]'>&#8592;</span> back
                        </Button>
                    </ThemeProvider>
                </div>

                <AddTeamMembers />
            </div>
        </div>
    );

}


export default Manageteams;