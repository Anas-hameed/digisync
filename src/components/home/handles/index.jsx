import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useState } from 'react';
import axiosInstance from '~/axios/axiosinstance';
import { toast } from 'react-toastify';
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';


function Handles() {

    const [accessToken, setAccessToken] = useState("");
    const responseFacebook = (response) => {
        setAccessToken(response.accessToken);
        //here i will call the function to store access token

        axiosInstance.post('/meta/addCredential', {
            token: accessToken,
        }).then(
            result => {
                if (result.status === 201) {
                    console.log(result);
                    console.log("Acess token" + accessToken);
                }
            }
        ).catch(error => {
            console.log(error);
            if (error?.code === "ERR_NETWORK") {
                toast.error("Network Error!");
            }
            else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
                // toast.error(error.response.data.message);
                console.log(error.response.data.message);
            }
            else {
                toast.error("Something went wrong! Please try again.");
            }
        })

    }

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div className="w-full p-10 rounded-lg border-[1px] border-b-slate-300">
            <div className="flex-1">
                <div className="w-full max-w-md h-[60vh]">
                    <div className="horizontal container">
                        <div className="text-4xl text-bold text-black pb-10 font-poppins " >Accounts</div>
                        <section className="sm:py-4 dark:bg-gray-800 dark:text-gray-10">
                            <div className="container mx-auto space-y-8">
                                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-1 lg:grid-cols-2">
                                    <article className="flex flex-col rounded-md bg-blue-200">
                                        <div className="flex flex-col  p-6">
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
                                        <div className="flex flex-col flex-1 p-6">
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

                                    <GoogleOAuthProvider clientId="663668034691-0fqhqtoc1fds5lbc31v1nv82f9fo5dap.apps.googleusercontent.com">
                                        <article className="flex flex-col bg-pink-200 rounded-md dark:bg-gray-900">
                                            <div className="flex flex-col flex-1 p-6">
                                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Google Gmail Account</h3>
                                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                                                </div>
                                            </div>
                                        </article>
                                    </GoogleOAuthProvider>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Handles;