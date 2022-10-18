function Card(){
    return(
        <div className="max-w-xs m-2  shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src="https://source.unsplash.com/random/200x200/?2" alt="" className="object-cover object-center w-full  h-35 dark:bg-gray-500" />
            {/* <div className="flex flex-col justify-between p-6 space-y-8">
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-white dark:text-gray-900">Read more</button>
            </div> */}
        </div>
    )
}

export default Card;