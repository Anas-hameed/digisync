
import Heading3 from "../../heading3";
import CardParagraph from "../../cardParagraph";
function FeatureCard({imgSrc,spanText,heading,paragraph,buttonText,flexDirection}){
    return(
        <div className={`flex flex-col rounded-lg shadow-2xl overflow-hidden ${flexDirection}`}>
                    <img src={imgSrc} alt="" className="h-80  aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6">
                        <span className="text-xs uppercase text-black font-poppins">{spanText}</span>
                        <Heading3 content={heading}/>
                        <CardParagraph content={paragraph}/>
                        <button type="button" className="self-start bg-violet-400 font-roboto font-bold text-white p-2 rounded-md hover:bg-violet-500">{buttonText}</button>
                    </div>
        </div>

    )
}

export default FeatureCard;