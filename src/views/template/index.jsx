import TemplatePreview from "../../components/template";
import usePosterContent from "../../hooks/usePosterContent";

const Templates = () => {
    const { image } = usePosterContent();
    console.log(image);

    if (image.length === 0) {
        return <div className="flex justify-center items-center h-[80vh]">
            <h2 className="text-2xl font-semibold font-poppins">No Template Generated</h2>
        </div>
    } else {
        return (
            <div className="flex flex-wrap py-24 px-8">
                {
                    image.map((item, index) => {
                        return (
                            <div key={index} className="m-8">
                                <TemplatePreview data={item} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Templates;