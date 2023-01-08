import { Link } from 'react-router-dom';

// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useState } from 'react';
import Preview from '../template/preview';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '~/axios/axiosinstance';
import usePosterContent from "~/hooks/usePosterContent";


export default function Final() {
  const { prompt, image, catagory, posterText,
    Title, Promotion, Contact, Description, selectedPoster,
    caption, hastag, leftImage, bottomRightImage, bottomLeftImage } = usePosterContent();

  const navigate = useNavigate();
  const handleClick = () => {
    // join the array of hashtag 
    console.log(hastag);
    const obj = image.map((item, index) => {
      return {
        image_path: item.image_path,
        variation: {
          top_left: leftImage[index].image_path,
          bottom_left: bottomLeftImage[index].image_path,
          bottom_right: bottomRightImage[index].image_path,
        }
      };
    });
    axiosInstance.post('/post/savePoster', {
      prompt: prompt,
      image: obj,
      catagory: catagory,
      selectedText: posterText[selectedPoster],
      title: Title,
      promotion: Promotion,
      contact: Contact,
      description: Description,
      caption: caption,
      hashtag: hastag,

    }).then((res) => {
      console.log(res);
      navigate('/templates');
    }).catch((err) => {
      console.log(err);
    })


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
        {/* <Preview/> */}
        <div className="mt-3 text-xl font-semibold uppercase text-[#1565c0]">
          Congratulations!
        </div>
        <div className=" text-black text-center">
          Your templates have been created.<br />
          Press continue to see.
        </div>
        <div className="mt-10" onClick={handleClick}>
          <button className="h-10 px-5 bg-[#1565c0] text-white font-roboto font-bold transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-[#1565c0] ">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
