// import { useStepperContext } from "../../contexts/StepperContext";
import Accordion from "../accordion";
import { Disclosure } from '@headlessui/react'
import Card from "../card";
import { useFormik } from "formik";
import * as Yup from "yup"

export default function Background() {


  const formik = useFormik({
    initialValues: {
        prompt:"",
    },
    validationSchema:Yup.object({
        prompt: Yup.string()
            .min(3, 'Too Short!')
            .max(30, 'Too Long!')
    }),
    
    onSubmit:(values)=>{
        
          console.log(values)

         

    }
});

  
  const handleClick = event => {
    // 👇️ refers to the image element
    event.preventDefault();
    console.log(event.target);

    alert('Image clicked');
  };



  return (
    <>
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <h4 className="text-xl font-semibold">Description:</h4>
        <p className="mb-10">Enter a prompt to generate Background Image for your poster.For example, A robot trying to learn programming. </p>
        <form   onSubmit={formik.handleSubmit} action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="prompt" className="block text-sm">Image Prompt</label>
                {/* <input type="text" name="prompt" id="email" placeholder="Prompt" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" /> */}
                
                <input  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.title} type="text" name="prompt" id="prompt" placeholder="prompt" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                { formik.touched && formik.errors.title? <p className="text-red-600 text-xs">{formik.errors.title}</p>:null}
            </div>
            <button type="submit" className="px-10 py-1 mt-2 w-full text-md border rounded bg-black hover:bg-gray-800 text-white " >Search</button>
            
          </div>
        </form>
        
        
        

        
        <Accordion content={
              <Disclosure.Panel className="  grid grid-cols-2 pt-4  text-black ">
                <a href="" onClick={handleClick}><Card/></a>
                <a href="" onClick={handleClick}><Card/></a>
                <a href="" onClick={handleClick}><Card/></a>
                <a href="" onClick={handleClick}><Card/></a>
              </Disclosure.Panel>
            }/>
        
        <p className="mt-10">Select your Background Image by tapping the image and press next to continue </p>

      </div>
      
      
    </div>
    
    </>
    
  );
}
