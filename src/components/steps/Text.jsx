// import { useStepperContext } from "../../contexts/StepperContext";
import { useStepperContext } from "../contexts/StepperContext";
import ListBox from "../listBox";
export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <form  action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="prompt" className="block text-sm">Category</label>
                {/* <input type="text" name="prompt" id="email" placeholder="Prompt" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" /> */}
                <ListBox/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
