import { Link } from 'react-router-dom';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useState } from 'react';
import Preview from '../preview';

export default function Final() {

  const [accessToken,setAccessToken]=useState("")
  const responseFacebook = (response) => {
    console.log('access token:', response);
    setAccessToken(response.accessToken)
  }

  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <FacebookLogin
        appId="2812965265506326"
        autoLoad={true}
        fields="name,email,picture"
        scope="ads_management,business_management,instagram_basic,instagram_content_publish,pages_read_engagement,pages_show_list,pages_manage_posts,public_profile"
        callback={responseFacebook}
        render={renderProps => (
          <button className='h-10 px-5 bg-[#1976d2] hover:bg-blue-600 font-roboto font-bold rounded-lg text-white' onClick={renderProps.onClick}>This is my custom FB button</button>
        )}
        />

        <Preview/>
        <div className="mt-3 text-xl font-semibold uppercase text-[#1976d2]">
          Congratulations!
        </div>
        <div className=" text-black text-center">
          Your templates have been created.<br />
          Press continue to see.
        </div>
        <Link className="mt-10" to="/templates">
          <button className="h-10 px-5 bg-[#1976d2] text-white font-roboto font-bold transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-[#1565c0] ">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
