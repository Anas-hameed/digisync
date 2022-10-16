import Heading from "../heading";
import Paragraph from "../paragraph";
function SectionIntro({heading,paragraph})
{
    return(
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <Heading content={heading}/>
            <Paragraph content={paragraph}/>
        </div>

    )
}

export default SectionIntro;