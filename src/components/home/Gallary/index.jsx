
import { useState, useEffect } from "react";
import axiosInstance from "~/axios/axiosinstance";
import usePosterContent from "~/hooks/usePosterContent";
import { useNavigate } from "react-router-dom";
import Card from "./Card";


const GenerationGallary = () => {
    const nav = useNavigate();
    const [gallary, setGallary] = useState([]);
    const {
        setPrompt, setImage, setRightImage, setLeftImage, setBottomLeftImage, setBottomRightImage, setCatagory, setPosterText, setTitle, setPromotion, setContact, setDescription, setFont, setIndex, setSelectedPoster, setCaption, setHastag } = usePosterContent();

    const openTemplate = (index) => {
        console.log(gallary);
        if (gallary[index].image.length != 0) {
            const rightImage = gallary[index].image.map((item) => {
                return { image_path: item.image_path };
            });
            const botton_right = gallary[index].image.map((item) => {
                return { image_path: item.variation.bottom_right };
            });
            const botton_left = gallary[index].image.map((item) => {
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

    return (
        <div className="flex-1">
            <div className={`w-full p-10 rounded-lg ${gallary.length !== 0 && 'border-[1px] border-b-slate-300'}`} >
                <div className="text-4xl text-bold text-black font-poppins " >Gallery</div>
                {
                    gallary.length === 0 ?
                        <div className="mt-4 h-[50vh] font-poppins text-[24px]">No Recent template found</div>
                        :
                        <div className="flex flex-wrap flex-row py-10 gap-x-16 overflow-hidden gap-y-8">
                            {
                                gallary.map((item, index) => {
                                    return <Card index={index} openTemplate={openTemplate} images={item.image} caption={item.caption} hashtags={item.hashtag} key={item._id} />
                                })
                            }
                        </div>
                }
            </div>
        </div>
    )
}


export default GenerationGallary;