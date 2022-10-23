

const templatePreview = ({ data }) => {
    return (
        <div className="w-[400px] h-[400px] relative overflow-hidden rounded-lg shadow-lg cursor-pointer border-2 border-r-2">
            {/* <img className="object-cover w-full h-full" src={data.imageurl} alt="Flower and sky" /> */}
            <p className={`object-cover w-full h-full bg-black`} alt="Flower and sky" style={{background:`rgba(${data.bgcolor[0]},${data.bgcolor[1]},${data.bgcolor[2]},${data.bgcolor[3]})`}} ></p>
            <div className="absolute right-0 top-0 px-6 py-4">
                <img className="object-cover w-[200px] h-[200px]" src={data.imageurl} alt="Flower and sky" />
            </div>
            <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-100">Summer Offer</h4>
                <p className="text-sm leading-normal text-gray-100">Get an ammazing discount on the lestest collection</p>
            </div>
            <div className="absolute top-[60%] left-0 px-6">
                <h4 className="font-extrabold text-2xl text-gray-100"> Buy one <br />Get one free</h4>
            </div>
            <div className="absolute right-0 bottom-0 p-2">
                <div className="flex items-center">
                    <h4 className="text-sm font-semibold tracking-tight text-gray-100">Contact:&nbsp;</h4>
                    <p className="text-sm font-normal text-gray-100"> O34555055505</p>
                </div>
            </div>
        </div>)
}

export default templatePreview;