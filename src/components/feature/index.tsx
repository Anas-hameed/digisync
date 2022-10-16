import Heading3 from "../heading3/index.jsx";
import CardParagraph from "../cardParagraph";
import Heading from "../heading";
import Paragraph from "../paragraph";
import SectionIntro from "../sectionIntro";
import FeatureCard from "../featureCard";

function Feature(){
    return(
        <section className="p-4 lg:p-8 bg-white text-black">
            
            
            <SectionIntro 
            heading={"All the creative tools you need in one platform"} 
            paragraph={"DigiSync is a platform that uses A.I. technology to allow users to create, edit, and share content."} 
            />
            
            <div className="container mx-auto space-y-12">
                
                <FeatureCard imgSrc={"https://venngage-wordpress.s3.amazonaws.com/uploads/2021/11/section-3-poster-smaller.png"} heading={"Poster Generation"} spanText={"Create, it's free"} paragraph={"Create amazing Posters with AI in just few minutes"} buttonText={"Create"} flexDirection={" lg:flex-row"}/>
                
                <FeatureCard imgSrc={"https://media.smallbiztrends.com/2021/11/make-money-typing-1.png"} heading={"Email Generation"} spanText={"Create, it's free"} paragraph={"Create amazing Emails with AI in just few minutes"} buttonText={"Create"} flexDirection={" lg:flex-row-reverse"}/>
                
                <FeatureCard imgSrc={"https://img.freepik.com/free-photo/close-up-unrecognizable-man-touching-smartphone-screen_1262-16925.jpg"} heading={"SMS Generation"} spanText={"Create, it's free"} paragraph={"Create amazing SMS with AI in just few minutes"} buttonText={"Create"} flexDirection={" lg:flex-row"}/>
                
            </div>
        </section>
    )
}

export default Feature;