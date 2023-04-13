import { useEffect, useState } from 'react';
import CatagoryData from "./catagories.json";
import { toast } from 'react-toastify';
import axiosInstance from '../../../axios/axiosinstance';
import leftArrow from '~/media/Images/leftArrow.png';
import rightArrow from '~/media/Images/rightArrow.png';

import { useNavigate } from 'react-router-dom';


const PageNumber = ({ handleTemplatePage, curPage, page, setPage }) => {
    return (
        <li onClick={() => {
            setPage(curPage)
            handleTemplatePage(curPage);

        }}>
            <a
                className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full p-0 text-sm box-shadow-custom transition duration-150 ease-in-out  ${curPage === page ? 'bg-[#1976d2] text-white ' : 'text-black'}`}
                href="#"
            >
                {curPage}
            </a>
        </li>
    );
}


// A component to select the show and filter template
const SelectTemplate = () => {
    const [page, setPage] = useState(2);
    const [curPage, setCurPage] = useState(1);
    const [loading, setLoading] = useState(false);


    // useNavigate to go to other page
    const navigate = useNavigate();


    // all template and filtered templates
    const [template, setTemplate] = useState([]);


    // request for getting all the template
    useEffect(() => {
        setLoading(true);
        axiosInstance.get(`/template/?page=${page}`).then(
            result => {
                if (result.status === 200) {
                    setTemplate(result.data);
                    setLoading(false);
                }
            }
        ).catch(error => {
            setLoading(false);
            if (error?.code === "ERR_NETWORK") {
                toast.error("Network Error!");
            }
            else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
                toast.error(error.response.data.message);
            }
            else {
                toast.error("Something went wrong! Please try again.");
            }
        })
    }, []);

    const [templateCatagory, setTemplateCatagory] = useState("");
    const [templateCatagoryList, setTemplateCatagoryList] = useState(CatagoryData);

    const [filterArea, setFilterArea] = useState(false);


    const handleFilter = async (catagory) => {
        setLoading(true);
        axiosInstance.get(`/template/${catagory}`).then(
            result => {
                setLoading(false);
                if (result.status === 200) {
                    setTemplate(result.data);

                }
            }
        ).catch(error => {
            setLoading(false);
            if (error?.code === "ERR_NETWORK") {
                toast.error("Network Error!");
            }
            else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
                toast.error(error.response.data.message);
            }
            else {
                toast.error("Something went wrong! Please try again.");
            }
        })
    }


   




    // selection of the single template for editing
    const SelectTemplateForShow = (id) => {
        console.log(id);
        navigate(`/generation/email/email-editor/template/${id}`);
    }


    const handleTemplatePage = async (pageNo) => {
        setLoading(true);
        axiosInstance.get(`/template/?page=${pageNo}`).then(
            result => {
                setLoading(false);
                if (result.status === 200) {
                    setTemplate(result.data);
                }
            }
        ).catch(error => {
            setLoading(false);
            if (error?.code === "ERR_NETWORK") {
                toast.error("Network Error!");
            }
            else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
                toast.error(error.response.data.message);
            }
            else {
                toast.error("Something went wrong! Please try again.");
            }
        })

    }


    return (
        <section className='flex-1'>
            <div className="w-full p-10 rounded-lg border-[1px] border-b-slate-300">
                <div>
                    <div className="text-4xl text-bold text-black font-poppins relative" >Email Generation</div>

                    <div className='py-4'>
                        <input type="text" name="promotions" id="promotions" onFocus={(e) => {
                            setFilterArea(true);
                            if (e.target.value === "") {
                                setTemplateCatagoryList(CatagoryData);
                            } else {
                                const catagories = CatagoryData.filter((item) => item.toLowerCase().startsWith(e.target.value.toLowerCase()));
                                setTemplateCatagoryList(catagories);
                            }

                        }}

                            onBlur={() => {
                                setFilterArea(false);
                            }}



                            onChange={(e) => {
                                setTemplateCatagory(e.target.value);
                                setFilterArea(true);
                                if (e.target.value === "") {
                                    setTemplateCatagoryList(CatagoryData);
                                } else {
                                    const catagories = CatagoryData.filter((item) => item.toLowerCase().startsWith(e.target.value.toLowerCase()));
                                    setTemplateCatagoryList(catagories);

                                }
                            }




                            } value={templateCatagory} placeholder="Search a template" className="w-full px-3 py-2 border rounded-md bg-neutral-300  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]  placeholder-gray-400" />
                    </div>

                    {!loading ? (
                        <>
                            <div className={`min-w-[1014px] border-[#1976d2] mr-[70px] border-[2px] rounded-md p-4 flex flex-wrap absolute z-10 bg-white opacity-100 px-3  ${filterArea ? 'flex' : 'opacity-0'}`}>
                                {
                                    templateCatagoryList.map((item, index) => {
                                        return <div key={index} className='mr-8 bg-slate-50 border-[1px] hover:border-black text-gray-400 px-[16px] py-[6px] mb-4 rounded-lg' onClick={() => {
                                            setTemplateCatagory(item);
                                            setFilterArea(false);
                                            handleFilter(item);
                                        }}>
                                            {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </div>
                                    })
                                }
                            </div>
                            <div className='flex flex-wrap p-2'>
                                {template.map((item, index) => {
                                    return <div key={item._id} className='rounded-lg border-[1px] border-b-slate-300 mr-[20px] my-4'>
                                        <img src={`http://localhost:4000/digsync/api/v0.1/uploads/${item.imageUrl}`} className='overflow-hidden object-cover h-[500px] w-[300px] rounded-t-lg ' alt={item.name} />

                                        <div className='w-full border-[1px] border-b-slate-300'></div>
                                        <div className='flex justify-between items-center my-4'>
                                            <h3 className='p-2 pr-4 flex-[.5] font-poppins font-bold'>{item.name.length < 14 ? (item.name.charAt(0).toUpperCase() + item.name.slice(1)) : `${item.name.charAt(0).toUpperCase() + item.name.slice(1, 13)}...`}</h3>
                                            <div className='flex-[.5] flex justify-end'>
                                                <button className="mr-4 py-2 px-4 flex-[.6] text-white text-md font-roboto font-bold rounded bg-[#1976d2] hover:bg-[#1565c0]" onClick={() => SelectTemplateForShow(item._id)} >Customize</button>
                                            </div>
                                        </div>

                                    </div>
                                })}
                            </div>
                        </>
                    ) : (
                        <div className='flex min-h-[60vh] justify-center items-center'>
                            <div
                                className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#1565c0] border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span>
                            </div>
                        </div>)
                    }

                </div>

                <ul className={`flex justify-center mt-4 ${loading && 'hidden'}`}>
                    <li onClick={() => {
                        if (curPage != 0) {
                            setCurPage(curPage - 1);
                        }
                    }}>
                        <a
                            className={`box-shadow-custom mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300`}
                            href="#"
                            aria-label="Previous"
                        >
                            <img className="w-[16px]" alt="image" src={leftArrow} />
                        </a>
                    </li>

                    <PageNumber handleTemplatePage={handleTemplatePage} curPage={curPage} page={page} setPage={setPage} />
                    <PageNumber handleTemplatePage={handleTemplatePage} curPage={curPage + 1} page={page} setPage={setPage} />
                    <PageNumber handleTemplatePage={handleTemplatePage} curPage={curPage + 2} page={page} setPage={setPage} />

                    <li onClick={() => {
                        setCurPage(curPage + 1);
                    }}>
                        <a
                            className="box-shadow-custom mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                            href="#"
                            aria-label="Next"
                        >
                            <img className="w-[16px]" alt="image" src={rightArrow} />
                        </a>
                    </li>
                </ul>
            </div>



        </section >
    );
}
export default SelectTemplate;