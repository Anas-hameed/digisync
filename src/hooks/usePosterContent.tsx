import { PosterContext } from "../contexts/PosterContext";
import { useContext } from "react";

const usePosterContent = () => {
    const {
        prompt,
        setPrompt,
        image,
        setImage,
        catagory,
        setCatagory,
        posterText,
        setPosterText,
        Title,
        setTitle,
        Promotion,
        setPromotion,
        Contact,
        setContact,
        Description,
        setDescription,
        Font,
        setFont,
    } = useContext(PosterContext);

    return {
        prompt,
        setPrompt,
        image,
        setImage,
        catagory,
        setCatagory,
        posterText,
        setPosterText,
        Title,
        setTitle,
        Promotion,
        setPromotion,
        Contact,
        setContact,
        Description,
        setDescription,
        Font,
        setFont,
    };
}

export default usePosterContent;