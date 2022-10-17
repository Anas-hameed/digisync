// import { useStepperContext } from "../../contexts/StepperContext";
import { useStepperContext } from "../contexts/StepperContext";
import Heading3 from "../heading3";
import Paragraph from "../paragraph";
export default function Background() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <h4 className="text-xl font-semibold">Description:</h4>
        <p className="mb-10">Enter a prompt to generate Background Image for your poster.For example, A robot trying to learn programming. </p>
        <form  action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="prompt" className="block text-sm">Image Prompt</label>
                <input type="text" name="prompt" id="email" placeholder="Prompt" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
            </div>
          </div>
        </form>
        <p className="mt-10">Select your Background Image by tapping the image and press next to continue </p>
      </div>
    </div>
  );
}
