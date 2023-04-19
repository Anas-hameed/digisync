
import { Route, Routes } from "react-router-dom";
import Sidebar from "~/components/home/posterCreation/posterGeneration/sidebar";
import EditProfile from "~/components/home/Setting/Profile";
import ManageEmail from "~/components/home/Setting/EmailTeam";
import ManageSMS from "~/components/home/Setting/SMSTeams";
import SideBarData from './SidebarData';

import ManageTeam from "~/components/home/Setting/EmailTeam/ManageTeams/index";



const Setting = () => {
    return <div className="flex p-10 sm:space-x-16 md:space-x-16">
        <Sidebar SideBarData={SideBarData} />
        <Routes >
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/email/manage" element={<ManageEmail />} />
            <Route path="/email/team/:id" element={<ManageTeam />} />
            <Route path="/sms/manage" element={<ManageSMS />} />
        </Routes>
    </div>
}

export default Setting;