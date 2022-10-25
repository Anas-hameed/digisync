const templatePreview = ({ data }) => {
    // {console.log(data.paragraphfont)}
  return (
    <>
      <div className="w-[500px] h-[500px] relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img className="object-cover w-full h-full" src={data.image_path} alt="Flower and sky" />
        <div className="absolute top-0 left-0 px-6 py-12">
           
          <h4 style={{"fontFamily":`${data.headingfont}`}}
            className={`mb-3 mx-w-[400px] text-[40px] font-semibold tracking-tight text-gray-100 `}
          >
            AI Conference
          </h4>
          <p style={{"fontFamily":`${data.paragraphfont}`}} 
          className={`max-w-[250px] text-[20px] leading-normal text-gray-100 font-${data.paragraphfont}`}>
            The most intrestring Artificial Inteligence Projects 2022
          </p>
        </div>
        <div className="absolute top-[50%] left-0 px-6">
          <h4 className={`font-extrabold text-2xl text-gray-100 font-${data.paragraphfont}`}>
            {" "}
            Venue: FAST Auditorium
          </h4>
          <h4 className={`font-extrabold text-2xl text-gray-100 font-${data.paragraphfont}`}> Speaker: Talha Buddy</h4>
        </div>
        <div className="absolute top-[75%] left-0 px-6">
          <h4 className={`text-sm text-gray-100 font-${data.paragraphfont}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque modi quasi possimus voluptatem dolores iure,
            maxime voluptates soluta eveniet dolorum vel, facilis laborum aspernatur reiciendis iusto tenetur tempora
            asperiores illo.
          </h4>
        </div>
        <div className="absolute right-0 bottom-0 p-2">
          <div className="flex items-center">
            <h4 className={`text-sm font-semibold tracking-tight text-gray-100 font-${data.paragraphfont}`}>
              Contact:&nbsp;
            </h4>
            <p className={`text-sm font-normal text-gray-100 font-${data.paragraphfont}`}> O34555055505</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default templatePreview
