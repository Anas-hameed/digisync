import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useState } from 'react';
import axiosInstance from '~/axios/axiosinstance';
import {toast} from 'react-toastify';

function Handles(){

    const [accessToken,setAccessToken]=useState("");
    const responseFacebook = (response) => {
        setAccessToken(response.accessToken);
        //here i will call the function to store access token

        axiosInstance.post('/meta/addCredential', {
            token: accessToken,
        }).then(
            result => {
                if (result.status === 201) {
                    console.log(result);
                    console.log("Acess token"+ accessToken);
                }
            }
        ).catch(error => {
            console.log(error);
            if(error?.code==="ERR_NETWORK"){
                toast.error("Network Error!");
            }
            else if('response' in error && 'data' in error.response && 'message' in error?.response?.data){
                toast.error(error.response.data.message);
                console.log(error.response.data.message);
            }
            else
            {
                toast.error("Something went wrong! Please try again.");
            }
        })

    }
    
    return(
    <section className="sm:py-4 dark:bg-gray-800 dark:text-gray-10">
        <div className="container px-6 mx-auto space-y-8">
            {/* <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
            </div> */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-1 lg:grid-cols-2">
                <article className="flex flex-col rounded-md bg-blue-200">
                    {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                    </a> */}
                    <div className="flex flex-col  p-6">
                        {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                        {/* <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a> */}
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Facebook Account</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                            <FacebookLogin
                            appId="2812965265506326"
                            autoLoad={true}
                            fields="name,email,picture"
                            scope="ads_management,business_management,instagram_basic,instagram_content_publish,pages_read_engagement,pages_show_list,pages_manage_posts,public_profile"
                            callback={responseFacebook}
                            render={renderProps => (
                            <button className='h-10 px-5 bg-[#1976d2] hover:bg-blue-600 font-roboto font-bold rounded-lg text-white' onClick={renderProps.onClick}>Connect</button>
                            )}
                            />    
                        </div>
                        
                    </div>
                </article>
                <article className="flex flex-col bg-pink-200 rounded-md dark:bg-gray-900">
                    {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
                    </a> */}
                    <div className="flex flex-col flex-1 p-6">
                        {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a> */}
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Instagram Account</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                            <FacebookLogin
                            appId="2812965265506326"
                            autoLoad={true}
                            fields="name,email,picture"
                            scope="ads_management,business_management,instagram_basic,instagram_content_publish,pages_read_engagement,pages_show_list,pages_manage_posts,public_profile"
                            callback={responseFacebook}
                            render={renderProps => (
                            <button className='h-10 px-5 bg-[#1976d2] hover:bg-blue-600 font-roboto font-bold rounded-lg text-white' onClick={renderProps.onClick}>Connect</button>
                            )}
                            />    
                        </div>
                    </div>
                </article>
                
                
            </div>
        </div>
    </section>

    )

}

export default Handles;