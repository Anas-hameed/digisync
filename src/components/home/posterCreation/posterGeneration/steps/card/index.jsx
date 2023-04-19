function Card({image}){
    return(
        <div className="max-w-xs m-2  shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={image.image_path} alt="AI Generated Image" className="object-cover object-center w-full  h-35 dark:bg-gray-500" />
        </div>
    )
}

export default Card;