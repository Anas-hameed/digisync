import { useEffect, useState } from "react";
import { UseContextProvider } from "~/components/contexts/StepperContext";
import Stepper from "~/components/stepper";
import StepperControl from "~/components/stepperControl";
import Background from "~/components/steps/Background";
import Text from "~/components/steps/Text";
import Final from "~/components/steps/Final";
import Heading from "~/components/home/heading";
import Paragraph from "~/components/home/paragraph";
import Additionals from "~/components/steps/Additionals";
import Caption from "~/components/steps/Caption";
import Hashtag from "~/components/steps/Hashtag";
import Sidebar from "~/components/sidebar";
import axiosInstance from "~/axios/axiosinstance";
import Handles from "~/components/handles";
import {toast} from 'react-toastify';


function PosterGeneration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [insights,setInsights] = useState(false);
  const [dashboard,setDashboard] =useState(false);
  const [accounts,setAccounts] =useState(true);
  const [data,setData] = useState();


  useEffect(()=>{

    axiosInstance.get('/meta/getFBInsights')
    .then(
      result => {
          if (result.status === 201) {
              console.log("my results = ",result.data.data);
              setData(result.data.data);
          }
      }
    ).catch(error => {
      console.log(error);
      if(error?.code==="ERR_NETWORK"){
          toast.error("Network Error!");
      }
      else if('response' in error && 'data' in error.response && 'message' in error?.response?.data){
          toast.error(error.response.data.message);
      }
      else
      {
          toast.error("Something went wrong! Please try again.");
      }
    })

  },[insights])


  const steps = [
    "Background",
    "Text",
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
        return <Text />;
      case 3:
        return <Additionals />;
      case 4:
        return <Caption/>;
      case 5:
        return <Hashtag/>;
      case 6:
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
    <section className="p-8 bg-white text-black font-poppins">
      
      <div className="flex justify-center sm:space-x-16 md:space-x-32">
        <div className="hidden sm:block w-[80]">
            <Sidebar accounts={accounts} setAccounts={setAccounts} insights={insights} setInsights={setInsights} dashboard={dashboard} setDashboard={setDashboard}  />
        </div>
        {
          accounts ===true?
          <div className="flex-1 ">
            <div className="w-full max-w-md  ">
              <div className="horizontal container">
                <div className="text-4xl text-bold text-black p-10 font-poppins " >Accounts</div>
                <Handles/>
              </div>
            </div>
          </div>
          :dashboard==true?
          <div className="flex-1">
        
        <div className="w-full max-w-md">

          {/* Stepper */}
          <div className="horizontal container ">

            <Stepper steps={steps} currentStep={currentStep} />

            <div className="my-10 p-10">
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
          :<>
          <div className="flex-1 ">
            <div className="w-full   dark:bg-gray-900 dark:text-gray-100">
              <div className="horizontal container">
                <div className="text-4xl text-bold text-black p-10 font-poppins " > Insights</div>
                <div className="flex flex-col sm:flex-row p-2 flex-wrap  text-2xl text-black font-poppins">
                    {                        
                      data.map((item)=>(
                        <div className="text-black font-poppins m-8 p-4 border rounded-md bg-gray-50 ">
                          {item.title}

                          {
                            item.values.map((index)=>(
                              <div>
                                  <div className="text-base text-black">
                                  Value: {index.value}
                                  </div>
                                  <div  className="text-base text-black">
                                  End time: {index.end_time}
                                  </div>
                                    
                              </div> 
                            )
                            )

                          }
                          
                          

                        </div>
                        
                        

                      ))  
                    }
                </div>
              </div>
            </div>
          </div>
          </>
        }
        
      </div>

      
    </section>

  );
}

export default PosterGeneration;
