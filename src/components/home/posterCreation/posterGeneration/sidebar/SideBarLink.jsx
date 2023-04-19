
import { useLocation, Link } from 'react-router-dom';

const SideBarLink = ({ Linkdata }) => {
    const location = useLocation();

    return <div className={`flex items-center rounded-lg ${(Linkdata?.option? location.pathname.startsWith(Linkdata.option):location.pathname === Linkdata.pathTo ) ? 'bg-blue-600 text-white hover:bg-blue-700' : 'hover:bg-gray-300 opacity-60'}`}>
        <Link to={Linkdata.pathTo} >
            <button rel="noopener noreferrer" className="items-center flex space-x-3 p-3 rounded-lg ">
                <img src={`${(Linkdata?.option?location.pathname.startsWith(Linkdata.option):location.pathname === Linkdata.pathTo) ? Linkdata.IconWhite : Linkdata.Iconblack}`} alt="person icon" width='24px' />
                <span className="font-poppins font-bold text-[16px]">{Linkdata.btnVal}</span>
            </button>
        </Link>
    </div>
}

export default SideBarLink;