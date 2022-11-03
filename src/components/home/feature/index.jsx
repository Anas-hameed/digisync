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
                
                <FeatureCard imgSrc={poster} heading={"Poster Generation"} spanText={"Create, it's free"} paragraph={"Create amazing poster with AI in just few minutes.Now With simple prompt you can create an amazing poster for your next blog,social media post or maketing event."} buttonText={"Create"} flexDirection={" lg:flex-row"} buttonRef={"/poster-generation"}/>
                
                <FeatureCard imgSrc={email} heading={"Email Generation"} spanText={"Create, it's free"} paragraph={"Create amazing Emails with AI in just few minutes. Now it is a click away for you to generate an awesome email for you next email marketing compaign"} buttonText={"Create"} flexDirection={" lg:flex-row-reverse"} buttonRef={"/email-generation"}/>
                
                <FeatureCard imgSrc={sms} heading={"SMS Generation"} spanText={"Create, it's free"} paragraph={"Stop wasting your time on writing SMS for your audience. Now you can generate SMS with AI in just few minutes"} buttonText={"Create"} flexDirection={" lg:flex-row"} buttonRef={"/sms-generation"}/>
                
            </div>
        </section>
    )
}

export default Feature;