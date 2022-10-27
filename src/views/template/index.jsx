import TemplatePreview from "../../components/template";
import usePosterContent from "../../hooks/usePosterContent";
import { Link } from "react-router-dom";


const Templates = () => {
    const { image } = usePosterContent();
    console.log(image);

    if (image.length === 0) {
        return <div className="flex flex-col justify-center items-center h-[75vh]">

                <h2 className="text-2xl font-semibold font-poppins">No Template Generated</h2>
                <Link to="/poster-generation" className="mt-4 text-base font-bold  inline-block text-center rounded-lg px-8 py-3 b bg-[#1976d2] hover:bg-[#1565c0] hover:border-2 hover:border-[#1565c0] text-white hover:text-primary  transition font-poppins">Go to Generation</Link>
            
        </div>
    } else {
        return (
            <div className="flex flex-wrap py-24 px-8">
                {
                    image.map((item, index) => {
                        return (
                            <div key={index} className="m-8">
                                <TemplatePreview data={item} index1={index} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Templates;