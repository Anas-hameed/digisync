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
        index,
        setIndex,
        selectedPoster,
        setSelectedPoster, 
        caption,
        setCaption,
        hastag,
        setHastag
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
        index,
        setIndex,
        selectedPoster,
        setSelectedPoster,
        caption,
        setCaption,
        hastag,
        setHastag
    };
}

export default usePosterContent;