
import usePosterContent from "../../hooks/usePosterContent";

const templatePreview = ({ data }) => {
  const {catagory,posterText,Title,Promotion,Contact,Description,Font,setFont}= usePosterContent();
  return (
    <>
      <div className="w-[500px] h-[500px] relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img className="object-cover w-full h-full" src={data.image_path} alt="Flower and sky" />
        <div className="absolute top-0 left-0 px-6 py-12">
           
          <h4 style={{"fontFamily":`${data.headingfont}`}}
            className={`mb-3 mx-w-[400px] text-[40px] font-semibold tracking-tight text-gray-100 `}
          >
            {Title}
          </h4>
          <p style={{"fontFamily":`${data.paragraphfont1}`}} 
          className={`max-w-[250px] text-[20px] leading-normal text-gray-100 `}>
            {posterText[0]}
          </p>
        </div>
        <div className="absolute top-[50%] left-0 px-6">
          <h4 style={{"fontFamily":`${data.paragraphfont2}`}} 
          className={`font-extrabold text-2xl text-gray-100 `}>
            {Promotion}
          </h4>
          {/* <h4 style={{"fontFamily":`${data.paragraphfont2}`}} 
          className={`font-extrabold text-2xl text-gray-100 `}> Speaker: Talha Buddy</h4> */}
        </div>
        <div className="absolute top-[75%] left-0 px-6">
          <h4 style={{"fontFamily":`${data.paragraphfont3}`}} 
          className={`text-[16px] text-sm text-gray-100 `}>
            {Description}
          </h4>
        </div>
        <div className="absolute right-0 bottom-0 p-2">
          <div className="flex items-center">
            <h4 style={{"fontFamily":`${data.paragraphfont3}`}} 
            className={`text-[15px] text-sm font-semibold tracking-tight text-gray-100 `}>
              Contact at: 
            </h4>
            <p style={{"fontFamily":`${data.paragraphfont3}`}} 
            className={`text-[15px] text-sm font-normal text-gray-100 `}> {Contact}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default templatePreview
