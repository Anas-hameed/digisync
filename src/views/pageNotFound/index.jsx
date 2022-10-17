import SectionIntro from "~/components/sectionIntro";

function PageNotFound(){

    return(
        <div className="flex justify-center md:my-16">
            <div className="w-screen">
            <SectionIntro heading={"404 Error"} paragraph={"Page not found"}/>
            </div>
        </div>

    )
}

export default PageNotFound;