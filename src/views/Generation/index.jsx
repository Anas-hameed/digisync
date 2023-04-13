import Sidebar from "~/components/home/posterCreation/posterGeneration/sidebar";
import SidebarData from "~/components/home/posterCreation/posterGeneration/sidebar/Linkdata";
import Handles from "~/components/home/handles";
import MyTabs from "~/components/home/posterCreation/posterGeneration/tabs";
import GenerationGallary from "~/components/home/Gallary";
import SelectTemplate from "~/components/home/EmailEditor/SelectTemplate";
import SMSGeneration from "~/components/home/SMS";

import Insights from "~/components/home/Insights";
import PosterCreation from "~/components/home/posterCreation";
import { Route, Routes } from "react-router-dom";


function PosterGeneration() {

  return (
    <section className="p-8 bg-white text-black font-poppins">
      {/* for desktop */}
      <div className="hidden sm:flex sm:justify-center sm:space-x-16 md:space-x-16">
        <Sidebar SideBarData={SidebarData} />
        <Routes>
            <Route path="/connect_accounts" element={ <Handles />} />
            <Route path="/poster" element={ <PosterCreation />} />
            <Route path="/gallery" element={ <GenerationGallary />} />
            <Route path="/sms" element={ <SMSGeneration />} />
            <Route path="/email" element={ <SelectTemplate />} />
            <Route path="/insights" element={ <Insights/>} />            
        </Routes>

      </div>

      {/* for mobile */}
      
      <div className="block sm:hidden">
        <div className="  sm:hidden ">
          <MyTabs tab1={'Accounts'} tab2={'Dashboard'} tab3={'Gallery'} tab4={'Create Email'}  tab5={'Insights'}
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
                  <div className="horizontal container">
                    <PosterCreation />
                  </div>
                </div>
              </div>

            }

            content3={
              <div className="flex-1">
                <div className="w-full dark:bg-gray-900 dark:text-gray-100">
                  <div className="horizontal container">
                    <GenerationGallary />
                  </div>
                </div>
              </div>
            }
            content4={
              <div className="flex-1 ">
                <div className="w-full dark:bg-gray-900 dark:text-gray-100">
                  <div className="horizontal container">
                    <SelectTemplate />
                  </div>
                </div>
              </div>

            }
            content5={
              <div className="flex-1 ">
                <div className="w-full dark:bg-gray-900 dark:text-gray-100">
                  <div className="horizontal container">
                    <Insights />
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