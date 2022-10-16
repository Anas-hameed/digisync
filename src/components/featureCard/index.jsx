
import Heading3 from "../heading3/index.jsx";
import CardParagraph from "../cardParagraph";
function FeatureCard({imgSrc,spanText,heading,paragraph,buttonText,flexDirection}){
    return(
        <div className={`flex flex-col overflow-hidden ${flexDirection}`}>
                    <img src={imgSrc} alt="" className="h-80 bg-violet-50 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-neutral-300">
                        <span className="text-xs uppercase text-black">{spanText}</span>
                        <Heading3 content={heading}/>
                        <CardParagraph content={paragraph}/>
                        <button type="button" className="self-start bg-violet-400 text-white p-2 rounded-md hover:bg-violet-500">{buttonText}</button>
                    </div>
        </div>

    )
}

export default FeatureCard;