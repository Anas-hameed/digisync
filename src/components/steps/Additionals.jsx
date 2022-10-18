// import { useStepperContext } from "../../contexts/StepperContext";
import { useStepperContext } from "../contexts/StepperContext";
export default function Additionals() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <h4 className="text-xl font-semibold">Description:</h4>
        <p className="mb-10">Enter the following details to create a stunning poster with CTA and logos etc. </p>
        
        <form  action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
                <div className="space-y-2">
                    <input type="text" name="type" id="type" placeholder="Type" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-2">
                    <input type="text" name="title" id="title" placeholder="Title" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-2">
                    <input type={"text"} name="promotions" id="promotions" placeholder="Promotions" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-2">
                    <input type="tel" name="contact" id="contact" placeholder="Contact" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-2">
                    <input type={"text"} name="description" id="description" placeholder="Description" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
            </div>
        </form>
        <p className="mt-10">Fill your details and press generate to see your templates</p>
      
      </div>
    </div>
  );
}
