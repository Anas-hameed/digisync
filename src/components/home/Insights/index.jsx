import axiosInstance from "~/axios/axiosinstance";
import { useEffect, useState } from "react";

import { toast } from 'react-toastify';

const Insights = () => {
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

    }, [])

    
    return <div className="flex-1  p-10 rounded-lg border-[1px] border-b-slate-300">
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

};


export default Insights;

