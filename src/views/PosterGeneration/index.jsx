import { useState } from "react";
import { UseContextProvider } from "~/components/contexts/StepperContext";
import Stepper from "~/components/stepper";
import StepperControl from "~/components/stepperControl";
import Background from "~/components/steps/Background";
import Text from "~/components/steps/Text";
import Final from "~/components/steps/Final";
import Heading from "~/components/home/heading";
import Paragraph from "~/components/home/paragraph";
import Additionals from "~/components/steps/Additionals";


function PosterGeneration() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Background",
    "Text",
    "Additionals",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Background />;
      case 2:
        return <Text />;
      case 3:
        return <Additionals />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <section className="p-4 lg:p-8 bg-white text-black md:mb-24 font-poppins">
      <div className="container mx-auto flex flex-col items-center px-4 py-10 text-center md:px-10 lg:px-32 xl:max-w-3xl">
        <Heading content={"Create Poster"} />
        <Paragraph content={"Start creating poster in just few steps"} />
      </div>

      <div className="flex justify-center ">
        <div className="w-full max-w-md p-4  dark:bg-gray-900 dark:text-gray-100">

          {/* Stepper */}
          <div className="horizontal container mt-5 ">

            <Stepper steps={steps} currentStep={currentStep} />

            <div className="my-10 p-10 ">
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
    </section>

  );
}

export default PosterGeneration;
