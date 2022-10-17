import { useState } from "react";
import { UseContextProvider } from "~/components/contexts/StepperContext";
import Stepper from "~/components/stepper";
import StepperControl from "~/components/stepperControl";

import Background from "~/components/steps/Background";
import Payment from "~/components/steps/Payment";
import Text from "~/components/steps/Text";
import Final from "~/components/steps/Final";
import SectionIntro from "~/components/sectionIntro";
import Heading from "~/components/heading";
import Paragraph from "~/components/paragraph";


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
        return <Payment />;
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

    <section className="p-4 lg:p-8 bg-white text-black md:mb-16 ">

<SectionIntro heading={"Create Poster"} paragraph={"Start creating poster in just few steps"}/>
      
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
