import SectionIntro from "../../sectionIntro";
import FeatureCard from "../featureCard";

import email from "../../../media/Images/email.svg";
import sms from "../../../media/Images/sms.svg";
import poster from "../../../media/Images/poster.svg";

function Feature(){
    return(
        <section className="p-4 lg:p-8 bg-white text-black mb-24">
            
            
            <SectionIntro 
            heading={"All the creative tools you need in one platform"} 
            paragraph={"DigiSync is a platform that uses A.I. technology to allow users to create, edit, and share content."} 
            />
            
            <div className="container mx-auto space-y-12">
                
                <FeatureCard imgSrc={poster} heading={"Poster Generation"} spanText={"Create, it's free"} paragraph={"Create amazing Posters with AI in just few minutes"} buttonText={"Create"} flexDirection={" lg:flex-row"}/>
                
                <FeatureCard imgSrc={email} heading={"Email Generation"} spanText={"Create, it's free"} paragraph={"Create amazing Emails with AI in just few minutes"} buttonText={"Create"} flexDirection={" lg:flex-row-reverse"}/>
                
                <FeatureCard imgSrc={sms} heading={"SMS Generation"} spanText={"Create, it's free"} paragraph={"Create amazing SMS with AI in just few minutes"} buttonText={"Create"} flexDirection={" lg:flex-row"}/>
                
            </div>
        </section>
    )
}

export default Feature;