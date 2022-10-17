export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="flex flex-wrap justify-center">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer transition duration-200 ease-in-out px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 text-white   ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>
      {/* className="w-full px-8 py-3 font-semibold rounded-md text-white  bg-violet-400 dark:bg-violet-400 dark:text-gray-900" */}
      
      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer transition duration-200 ease-in-out px-8 py-3 m-2 text-lg border rounded bg-black hover:bg-gray-800 text-white"
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>

      


    </div>
  );
}
