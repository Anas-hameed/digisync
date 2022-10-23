import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='container h-[80vh]'>
            <section className="h-full flex items-center justify-center">
                <div className="flex px-4">
                    <div className="px-4">
                        <div className="mx-auto max-w-[400px] text-center">
                            <h2 className="font-bold  mb-2 text-[50px] sm:text-[80px] md:text-[100px] leading-none">
                                404
                            </h2>
                            <h4
                                className=" font-semibold text-[22px] leading-tight mb-3"
                            >
                                Oops! That page can't be found
                            </h4>
                            <p className="text-lg  mb-8">
                                The page you are looking for it maybe deleted
                            </p>
                            <Link to="/" className="text-base font-semibold  inline-block text-center border border-blue-900 rounded-lg px-8 py-3 hover:bg-blue-900 hover:text-white hover:text-primary  transition">Go To Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default PageNotFound;