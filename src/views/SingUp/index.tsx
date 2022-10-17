
function SignUp(){

    return(
        // <div className="w-screen">

            <div className="flex justify-center my-16">
                <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Create an account</h2>
                    <p className="text-sm text-center dark:text-gray-400">Have an account?
                        <a href="/signin" rel="noopener noreferrer" className="focus:underline hover:underline">Sign in here</a>
                    </p>
                    
                    <form  action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">

                            <div className="space-y-2 ">
                                <input type="text" name="first-name" id="first-name" placeholder="First Name" className="w-1/2 px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                <input type="text" name="last-name" id="last-name" placeholder="Last Name" className="w-1/2 px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            
                            <div className="space-y-2">
                                <input type="text" name="country" id="country" placeholder="Country" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <input type="email" name="email" id="email" placeholder="E-mail" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <input type={"tel"} name="phone-number" id="phone-number" placeholder="Phone Number" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            
                        </div>
                        <button type={"submit"} className="w-full px-8 py-3 font-semibold rounded-md  bg-violet-400 dark:bg-violet-400 dark:text-gray-900">Sign up</button>
                    </form>
                </div>
            </div>

        // </div>
        
        

    )


}

export default SignUp;