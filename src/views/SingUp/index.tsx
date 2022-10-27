import {useFormik} from "formik";
import * as Yup from "yup"
import axiosInstance from '../../axios/axiosinstance';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import { useState } from "react";

function SignUp(){

    const [disable, setDisable] = useState(true);

    const formik = useFormik({
        initialValues: {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        },
        validationSchema:Yup.object({
            firstName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            lastName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            // country:Yup.string().required("Requierd"),    
            email:Yup.string().email('Invalid email').required('Required'),
            // phoneNumber:Yup.string().required("Required"),
            password: Yup.string()
                .required('Please Enter your password')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                ),
            confirmPassword: Yup
                .string()
                .required()
                .oneOf([Yup.ref("password"), null], "Passwords must match")   
            
        }),
        
        onSubmit:(values)=>{
            console.log(values)
            axiosInstance.post('/user', {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            }).then(
                result => {
                    if (result.status === 201) {
                        console.log(result);
                        console.log(result.data);
                        localStorage.setItem('token', result.data.token);
                        const rediect= localStorage.getItem('redirect');
                        if(rediect){
                            window.location.href=rediect;
                        }else{
                            window.location.href = "/";
                        }
                        toast.success("Account Registered Successfully");
                    }
                }
            ).catch(error => {
                console.log(error);
                if(error?.code==="ERR_NETWORK"){
                    toast.error("Network Error!");
                }
                else if('response' in error && 'data' in error.response && 'message' in error?.response?.data){
                    toast.error(error.response.data.message);
                }
                else
                {
                    toast.error("Something went wrong! Please try again.");
                }
            })

        }
    });


    const handleDisable= ()=>{
        // check if all the fields are filled
        if(formik.values.firstName && formik.values.lastName && formik.values.email && formik.values.password===formik.values.confirmPassword){
            setDisable(false);
        }
        else{
            setDisable(true);
        }
          
    }

    return(
        // <div className="w-screen">

            <div className="flex justify-center my-16 font-poppins">
                <div className="w-full max-w-md p-8 rounded-xl shadow-2xl  md:p-8 lg:p-10 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="mb-3 text-3xl font-semibold text-center font-poppins">Create an account</h2>
                    <p className="text-sm text-center dark:text-gray-400 mb-4">Have an account? 
                        <Link to="/login" className="focus:underline hover:underline text-blue-900"> Sign in here</Link>
                    </p>
                    
                    <form onSubmit={formik.handleSubmit} action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">

                            <div className="space-y-2 ">
                                <input onBlur={formik.handleBlur} onChange={(e)=>{
                                    formik.handleChange(e);
                                    handleDisable();
                                }} value={formik.values.firstName} type="text" name="firstName" id="firstName" placeholder="First Name" className="w-full px-3 py-2 border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                { formik.touched && formik.errors.firstName? <p className="text-red-600 text-xs">{formik.errors.firstName}</p>:null}
                                
                            </div>

                            <div className="space-y-2">
                                <input onBlur={formik.handleBlur} onChange={(e)=>{
                                    formik.handleChange(e);
                                    handleDisable();
                                }}
                                value={formik.values.lastName} type="text" name="lastName" id="lastName" placeholder="Last Name" className="w-full px-3 py-2 border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                { formik.touched && formik.errors.lastName? <p className="text-red-600 text-xs">{formik.errors.lastName}</p>:null}
                            
                            </div>
                            
                            
                            <div className="space-y-2">
                                <input onBlur={formik.handleBlur} onChange={(e)=>{
                                    formik.handleChange(e);
                                    handleDisable();
                                
                                }} value={formik.values.email} type="email" name="email" id="email" placeholder="E-mail" className="w-full px-3 py-2 border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                { formik.touched && formik.errors.email? <p className="text-red-600 text-xs font-poppins">{formik.errors.email}</p>:null}
                            </div>
                
                            <div className="space-y-2">
                                <input onBlur={formik.handleBlur} onChange={(e)=>{
                                    formik.handleChange(e);
                                    handleDisable();
                                }} value={formik.values.password} type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                { formik.touched && formik.errors.password? <p className="text-red-600 text-xs font-poppins">{formik.errors.password}</p>:null}
                            </div>
                            <div className="space-y-2">
                                <input onBlur={(e)=>{
                                    formik.handleBlur(e);
                                    handleDisable();
                                }} onChange={(e)=>{
                                    formik.handleChange(e);
                                    handleDisable();
                                }} value={formik.values.confirmPassword} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                { formik.touched && formik.errors.confirmPassword? <p className="text-red-600 text-xs font-poppins">{formik.errors.confirmPassword}</p>:null}
                            </div>
                            
                        </div>
                        <button type={"submit"} className={`w-full px-8 py-3 font-bold rounded-md text-white dark:bg-violet-400 dark:text-gray-900 ${disable?'bg-violet-400':'bg-violet-900'}`}>Sign up</button>
                    </form>
                </div>
            </div>

        // </div>
        
        

    )


}

export default SignUp;