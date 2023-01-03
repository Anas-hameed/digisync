import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useState } from 'react';

function Handles(){

    const [accessToken,setAccessToken]=useState("")
    const responseFacebook = (response) => {
        console.log('access token:', response);
        setAccessToken(response.accessToken)
        //here i will call the function to store access token
    }

    return(
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50 font-poppins">
            <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
                <div className="flex flex-col justify-center lg:text-left">
                    <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-400">Hey!!</p>
                    <h1 className="py-2 text-3xl font-medium leading-tight title-font">Connect your Social Media handles</h1>
                </div>
                <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                    <FacebookLogin
                    appId="2812965265506326"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="ads_management,business_management,instagram_basic,instagram_content_publish,pages_read_engagement,pages_show_list,pages_manage_posts,public_profile"
                    callback={responseFacebook}
                    render={renderProps => (
                    <button className='h-10 px-5 bg-[#1976d2] hover:bg-blue-600 font-roboto font-bold rounded-lg text-white' onClick={renderProps.onClick}>Connect Facebook</button>
                    )}
                    />
                </div>
            </div>
        </section>

    )

}

export default Handles;