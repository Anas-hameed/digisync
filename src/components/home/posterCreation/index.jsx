import { useState } from "react";
import Stepper from "~/components/home/posterCreation/posterGeneration/stepper";
import StepperControl from "~/components/home/posterCreation/posterGeneration/stepperControl";
import Background from "~/components/home/posterCreation/posterGeneration/steps/Background";
import Final from "~/components/home/posterCreation/posterGeneration/steps/Final";
import Additionals from "~/components/home/posterCreation/posterGeneration/steps/Additionals";
import Caption from "~/components/home/posterCreation/posterGeneration/steps/Caption";
import Hashtag from "~/components/home/posterCreation/posterGeneration/steps/Hashtag";
import { UseContextProvider } from "~/components/home/posterCreation/posterGeneration/contexts/StepperContext";

const PosterCreation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const steps = [
    "Background\\text",
    "Additionals",
    "Caption",
    "Hashtag",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Background />;
      case 2:
        return <Additionals />;
      case 3:
        return <Caption />;
      case 4:
        return <Hashtag />;
      case 5:
        return <Final />;
      default:
    }
  };



  return <div className="flex-1  p-10 rounded-lg border-[1px] border-b-slate-300">
    <div className="w-full max-w-[750px]">
      <div className="text-4xl text-bold text-black pb-10 font-poppins" >Post Generation</div>
      {/* Stepper */}
      <div className="horizontal container ">
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="my-10 py-10">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>
      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  </div>
}


export default PosterCreation;