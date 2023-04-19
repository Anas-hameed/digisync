import SideBarLink from "./SideBarLink";

const Sidebar = ({ SideBarData }) => {
    return (
        <div className="hidden sm:block w-[80]">
            <div className="p-3 space-y-2 w-60  text-black rounded-xl box-shadow-custom">
                <div className="divide-y divide-gray-700">
                    <ul className="pt-8 pb-4 space-y-2 text-sm">
                        {
                            SideBarData.map((item, index) => {
                                return <li key={index}>
                                    <SideBarLink Linkdata={item} key1={index} />
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Sidebar;