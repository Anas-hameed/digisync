import { useEffect, useRef, useState } from 'react';
import axiosInstance from '~/axios/axiosinstance';
import Man from '~/media/Images/man.png';
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";
import { Button, SIZE } from "baseui/button";
import {toast} from 'react-toastify';




const EditProfile = () => {
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [nameEdit, setEditName] = useState(false);
    const [emailEdit, setEmailName] = useState(false);
    const [fullName, setFullName] = useState(' ');
    const updateImage = useRef();

    const [image, setImage] = useState(null);
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    useEffect(() => {
        axiosInstance.get('/user/whoami').then(
            result => {
                if (result.status === 200) {
                    console.log(result.data);
                    setEmail(result.data.email);
                    setProfileImage(result.data.profileImage);
                    setFullName(result.data.firstName[0].toUpperCase() + result.data.firstName.slice(1) + " " + result.data.lastName);
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
    }, []);


    const handleSubmit= ()=>{
        // split the full name to first name and last name
        const name = fullName.split(' ');
        // make a data object to send to the server
        const data = {
            firstName: name[0],
            // all the names after the first name is the last name
            lastName: name.slice(1).join(' '),
        }
        // make a form data with image 
        const formData = new FormData();
        formData.append('file', updateImage.current.files[0]);
        // send the form data to the server
        axiosInstance.patch('/user/uploadProfile', formData).then(
            result => {
                if (result.status === 200) {
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

        
        axiosInstance.patch('/user', data).then(
            result => {
                if (result.status === 200) {
                    toast.success("Profile Updated!");
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
                <p className='text-4xl text-bold text-black font-poppins'>
                    Profile
                </p>
                <span className='text-2xl text-black font-poppins'>➜ Edit</span>
            </div>


            <div className='flex flex-col items-center my-4'>
                <div className='mt-4'>
                    <img onClick={() => updateImage.current.click()} className={`w-[200px] ${profileImage === '' ? '' : 'border-[1px] border-[rgba(0,0,0,.2)] rounded-[50%]'}`} src={updateImage.current?.files[0] ? image : profileImage === '' ? Man : `http://localhost:4000/digsync/api/v0.1/${profileImage}`} alt="Profile Image" />
                    <input type="file" hidden ref={updateImage} onChange={onImageChange} />

                </div>
                {

                    nameEdit ? (
                        <div className='my-4'>
                            <input onBlur={(e) => { e.preventDefault(); setEditName(false); }} className='w-fit mt-2 font-poppins text-[22px] focus:border-none focus:outline-none font-bold' type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </div>
                    ) : <h1 onClick={() => {
                        setEditName(true);
                    }} className='mt-2 font-poppins text-[32px] font-bold'>{`${fullName[0].toUpperCase() + fullName.slice(1)}`}</h1>
                }



                <h1 onClick={() => setEditName(true)} className='font-poppins font-[18px] font-bold'>{email}</h1>


                <div className='my-6'>

                    <ThemeProvider
                        theme={createTheme(lightThemePrimitives, {
                            colors: {
                                buttonPrimaryFill: "rgb(28,100,242)",
                                buttonPrimaryHover: "rgb(26,86,219)"
                            }

                        })}
                    >
                        <Button
                            style={{ padding: "14px 30px", letterSpacing: '1px', fontSize: '18px', fontFamily: 'poppins', fontWeight: 'bold' }}
                            onClick={() => handleSubmit()}
                            size={SIZE.compact}>
                            Update Profile
                        </Button>
                    </ThemeProvider>
                </div>

            </div>
        </div>
    </div>
}


export default EditProfile;