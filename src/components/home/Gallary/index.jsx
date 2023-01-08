
import { useState, useEffect } from "react";
import axiosInstance from "~/axios/axiosinstance";
import * as React from "react";
import { Button, SIZE } from "baseui/button";
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";

import usePosterContent from "~/hooks/usePosterContent";
import { useNavigate } from "react-router-dom";



const Card = ({ images, caption, hashtags , index,openTemplate, key  }) => {
    let hashtag = "";
    if (hashtags !== null || hashtags !== "") {
        hashtag = hashtags.replace(/%23/g, "#");
    }

    return (
        <div className="rounded-[15px] box-shadow-custom relative pb-14" key={key}>
                <div class="relative">
                    <div className="w-[400px] h-[200px] overflow-hidden relative rounded-t-[15px]">
                        <img className="translate-x-[-50%]" src={images[0].image_path} alt="image" />
                    </div>
                    <div className="absolute left-0 top-0 translate-x-[50%]">
                        <div className="w-[400px] h-[200px] overflow-hidden relative rounded-r-[15px]">
                            <img className="translate-x-[-50%]  rounded-r-[15px]" src={images[1].image_path} alt="image" />
                        </div>
                    </div>
                    <div className="w-[400px] h-[200px] overflow-hidden relative">
                        <img className="translate-x-[-50%]" src={images[2].image_path} alt="image" />
                    </div>
                    <div className="absolute right-0 bottom-0 translate-x-[50%]">

                        <div className="w-[400px] h-[200px] overflow-hidden relative">
                            <img className="translate-x-[-50%]" src={images[3].image_path} alt="image" />
                        </div>
                    </div>
                </div>
                <div className="max-w-[400px] py-4 px-4 font-sm font-poppins leading-[22px]">
                    <p>{caption}<span className="font-roboto block mt-1">{hashtag}</span></p>
                </div>
                <div className=" px-4 right-0 bottom-4 absolute">
                    <ThemeProvider
                        theme={createTheme(lightThemePrimitives, {
                            colors: { 
                                buttonPrimaryFill:"rgb(28,100,242)",
                            buttonPrimaryHover: "rgb(26,86,219)" }
                            
                        })}
                    >
                        <Button
                            onClick={() => openTemplate(index)}
                            size={SIZE.compact}>
                            Open template
                        </Button>
                    </ThemeProvider>


                </div>
        </div>
    )
}

const GenerationGallary = () => {
    const nav= useNavigate();
    const [gallary, setGallary] = useState([]);
    const {
        setPrompt,setImage,setRightImage,setLeftImage,setBottomLeftImage,setBottomRightImage,setCatagory,setPosterText,setTitle,setPromotion,setContact,setDescription,setFont,setIndex,setSelectedPoster,setCaption,setHastag } = usePosterContent();
    


    const openTemplate = (index) => {
        console.log(gallary);
        if(gallary[index].image.length!=0){ 
            const rightImage = gallary[index].image.map((item) => {
                return { image_path: item.image_path };
            });
            const botton_right =  gallary[index].image.map((item) => {
                return { image_path: item.variation.bottom_right };
            });
            const botton_left =  gallary[index].image.map((item) => {
                return { image_path: item.variation.bottom_left };
            });
            const top_left = gallary[index].image.map((item) => {
                return { image_path: item.variation.top_left };
            });
            setCaption(gallary[index].caption);
            setHastag(gallary[index].hashtag);
            setImage(rightImage);
            setRightImage(rightImage);
            setLeftImage(top_left);
            setBottomLeftImage(botton_left);
            setBottomRightImage(botton_right);
            setDescription(gallary[index].description);
            setContact(gallary[index].contact);
            setTitle(gallary[index].title);
            setPromotion(gallary[index].promotion);
            setPrompt(gallary[index].prompt);
            setCatagory(gallary[index].catagory);
            setPosterText([gallary[index].selectedText]);
            setIndex(0);
            setSelectedPoster(0);
            nav("/templates");

        }

    };

    useEffect(() => {
        axiosInstance.get("/post/savePoster").then((res) => {
            setGallary(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return <div className={`w-full p-10 rounded-lg ${gallary.length !== 0 &&'border-[1px] border-b-slate-300'}`} >
        <div className="text-4xl text-bold text-black font-poppins " >Gallary</div>
        {
            gallary.length === 0 ?
                <div className="mt-4 h-[50vh] font-poppins text-[24px]">No Recent template found</div>
                :
                <div className="flex flex-wrap flex-row py-10 gap-x-16 overflow-hidden gap-y-8">
                    {
                        gallary.map((item, index) => {
                            return <Card  index={index} openTemplate={openTemplate} images={item.image} caption={item.caption} hashtags={item.hashtag}  key={item._id}/>
                        })
                    }
                </div>
        }
    </div>
}


export default GenerationGallary;