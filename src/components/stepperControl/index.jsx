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
      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer transition duration-200 ease-in-out px-8 py-3 m-2 text-lg border rounded bg-black hover:bg-gray-800 text-white"
      >
        {currentStep === steps.length - 1 ? "Generate" : "Next"}
      </button>
    </div>
  );
}
