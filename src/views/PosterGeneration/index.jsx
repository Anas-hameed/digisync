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
import Sidebar from "~/components/posterGeneration/sidebar";
import axiosInstance from "~/axios/axiosinstance";
import Handles from "~/components/handles";
import { toast } from 'react-toastify';
import MyTabs from "~/components/posterGeneration/tabs";
import GenerationGallary from "~/components/home/Gallary";

function PosterGeneration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [insights, setInsights] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [accounts, setAccounts] = useState(true);
  const [gallary, setGallary] = useState(false);
  const [template, setTemplate] = useState(false);
  const [data, setData] = useState([]);
  const [instadata, setInstaData] = useState([]);


  useEffect(() => {

    axiosInstance.get('/meta/getFBInsights')
      .then(
        result => {
          if (result.status === 201) {
            console.log("my results = ", result.data.data);
            setData(result.data.data);
          }
        }
      ).catch(error => {
        console.log(error);
        if (error?.code === "ERR_NETWORK") {
          toast.error("Network Error!");
        }
        else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
          // toast.error(error.response.data.message);
          console.log(error.response.data.message);
        }
        else {
          toast.error("Something went wrong! Please try again.");
        }
      })

    // insta
    axiosInstance.get('/meta/getInstaInsights')
      .then(
        result => {
          if (result.status === 201) {
            console.log("my results = ", result.data.data);
            setInstaData(result.data.data);
          }
        }
      ).catch(error => {
        console.log(error);
        if (error?.code === "ERR_NETWORK") {
          // toast.error("Network Error!");
          console.log("network err")
        }
        else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
          // toast.error(error.response.data.message);
          console.log(error.response.data.message);
        }
        else {
          console.log('insta insights error');
          // toast.error("Something went wrong! Please try again.");
        }
      })

  }, [insights])


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

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };


  return (
    <section className="p-8 bg-white text-black font-poppins">
      {/* for desktop */}
      <div className=" hidden sm:flex sm:justify-center sm:space-x-16 md:space-x-16">
        <div className="hidden sm:block w-[80]">
          <Sidebar template={template} setTemplate={setTemplate} accounts={accounts} setAccounts={setAccounts} insights={insights} setInsights={setInsights} dashboard={dashboard} setDashboard={setDashboard} gallary={gallary} setGallary={setGallary} />
        </div>
        {
          accounts === true ?
            <div className="flex-1">
              <div className="w-full max-w-md h-[60vh]">
                <div className="horizontal container">
                  <div className="text-4xl text-bold text-black p-10 font-poppins " >Accounts</div>
                  <Handles />
                </div>
              </div>
            </div>
            : dashboard == true ?
              <div className="flex-1  p-10 rounded-lg border-[1px] border-b-slate-300">
                <div className="w-full max-w-[750px]">
                  <div className="text-4xl text-bold text-black p-10 font-poppins" >Post Generation</div>
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
              : gallary == true ?
                <div className="flex-1">
                  <GenerationGallary />
                </div>
                : <>
                  <div className="flex-1 ">
                    <div className="w-full dark:bg-gray-900 dark:text-gray-100">
                      <div className="horizontal container">
                        <div className="text-4xl text-bold text-black p-10 font-poppins " >Facebook Insights</div>
                        <div className="flex flex-col sm:flex-row p-2 flex-wrap  text-2xl text-black font-poppins">
                          {
                            data.length !== 0 && data.map((item, index) => (
                              <div className="text-black font-poppins m-8 p-4 border rounded-md bg-gray-50" key={index}>
                                {item.title}

                                {
                                  item.values.map((index, id) => (
                                    <div key={id}>
                                      <div className="text-base text-black">
                                        Value: {index.value}
                                      </div>
                                      <div className="text-base text-black">
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
                        {/* insta */}
                        <div className="text-4xl text-bold text-black p-10 font-poppins " >Instagram Insights</div>
                        <div className="flex flex-col sm:flex-row p-2 flex-wrap  text-2xl text-black font-poppins">
                          {
                            instadata.length !== 0 && instadata.map((item, index) => (
                              <div className="text-black font-poppins m-8 p-4 border rounded-md bg-gray-50 " key={index}>
                                {item.title}

                                {
                                  item.values.map((index, id) => (
                                    <div key={id}>
                                      <div className="text-base text-black">
                                        Value: {index.value}
                                      </div>
                                      <div className="text-base text-black">
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

      {/* for mobile */}

      <div className="block sm:hidden ">
        <div className="  sm:hidden ">
          <MyTabs tab1={'Accounts'} tab2={'Dashboard'} tab3={'Insights'} tab4={'Gallery'}
            content1={
              <div className="flex-1 ">
                <div className="w-full max-w-md  ">
                  <div className="horizontal container">
                    <div className="text-4xl text-bold text-black p-10 font-poppins " >Accounts</div>
                    <Handles />
                  </div>
                </div>
              </div>
            }
            content2={
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

            }

            content3={
              <div className="flex-1 ">
                <div className="w-full   dark:bg-gray-900 dark:text-gray-100">
                  <div className="horizontal container">
                    <div className="text-4xl text-bold text-black p-10 font-poppins " >Facebook Insights</div>
                    <div className="flex flex-col sm:flex-row p-2 flex-wrap  text-2xl text-black font-poppins">
                      {
                        data.length !== 0 && data.map((item, index) => (
                          <div className="text-black font-poppins m-8 p-4 border rounded-md bg-gray-50 " key={index}>
                            {item.title}

                            {
                              item.values.map((index, id) => (
                                <div key={id}>
                                  <div className="text-base text-black">
                                    Value: {index.value}
                                  </div>
                                  <div className="text-base text-black">
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

                    {/* insta insights */}
                    <div className="text-4xl text-bold text-black p-10 font-poppins " >Instagram Insights</div>
                    <div className="flex flex-col sm:flex-row p-2 flex-wrap  text-2xl text-black font-poppins">
                      {
                        instadata.length !== 0 && instadata.map((item, index) => (
                          <div className="text-black font-poppins m-8 p-4 border rounded-md bg-gray-50" key={index}>
                            {item.title}

                            {
                              item.values.map((index, id) => (
                                <div key={id}>
                                  <div className="text-base text-black">
                                    Value: {index.value}
                                  </div>
                                  <div className="text-base text-black">
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

            }

            content4={
              <div className="flex-1 ">
                <div className="w-full max-w-md  ">
                  <div className="horizontal container">
                    <div className="text-4xl text-bold text-black p-10 font-poppins " >Gallery</div>
                  </div>
                </div>
              </div>
            }
          />

        </div>


      </div>


    </section>

  );
}

export default PosterGeneration;