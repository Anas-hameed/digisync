// import { useStepperContext } from "../../contexts/StepperContext";
import { useStepperContext } from "../contexts/StepperContext";
export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
      <form  action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            
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
        </form>
      </div>
    </div>
  );
}
