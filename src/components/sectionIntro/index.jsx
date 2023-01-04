import Paragraph from "../home/paragraph";
function SectionIntro({ heading, paragraph }) {
    return (
        <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-8 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="max-w-[350px] text-3xl font-medium font-poppins text-center md:text-4xl md:max-w-lg">Manage all your digital marketing work with <span className="font-poppins text-center font-bold">creative tools under one platform</span>
            </h1>
            <Paragraph content={paragraph} />
        </div>

    )
}

export default SectionIntro;