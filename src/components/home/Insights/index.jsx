import axiosInstance from "~/axios/axiosinstance";
import { useEffect, useMemo, useState } from "react";

import { toast } from 'react-toastify';

import { ResponsiveContainer, BarChart, XAxis, Label, LabelList, YAxis, Tooltip, Legend, Bar, PieChart, Pie } from 'recharts';

const data1 = {
    "F.13-17": 1,
    "F.18-24": 5,
    "F.25-34": 4,
    "M.18-24": 68,
    "M.25-34": 7,
    "M.35-44": 1,
    "M.65+": 2,
    "U.13-17": 2,
    "U.18-24": 13,
    "U.25-34": 1
}



const data = [
    { currency: 'Peshawar', amount: 6, amountLabel: 6.00 },
    { currency: 'Islamabad', amount: 14, amountLabel: 14.00 },
    { currency: 'Multan', amount: 26, amountLabel: 26.00 },
    { currency: 'Faisalabad', amount: 21, amountLabel: 21.00 },
    { currency: 'Rawalpindi', amount: 16, amountLabel: 16.00 },
];

const data2 = [
    { name: 'Male', value: 60, fill: '#8884d8' },
    { name: 'Women', value: 40, fill: "#524f85" },
]

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name="male", index }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const VerticalBarChart = () => {
    return (
        <div className="flex w-full rounded-lg h-[400px] mt-4 box-shadow-custom">
            <div className="flex justify-center items-center w-3/5 h-[360px]">
                <ResponsiveContainer>
                    <BarChart margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
                        data={data}
                        layout="vertical">
                        <XAxis type="number" orientation="bottom" stroke="#285A64" padding={"10px"} />
                        <YAxis type="category" dataKey="currency" axisLine={false} tickLine={false} style={{ fill: "#285A64" }} />
                        <Tooltip />
                        <Bar dataKey="amount" fill="#8884d8" barSize={{ height: 26 }} >
                            <LabelList dataKey="amountLabel" position="insideRight" style={{ fill: "white" }} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex-1 h-full">
                <ResponsiveContainer>
                    <PieChart>
                        <Legend verticalAlign="top" height={36} /> 
                        <Pie data={data2}    label={renderCustomizedLabel} labelLine={false} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={130} fill="#8884d8" />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}



const Insights = () => {
    const [data, setData] = useState([]);
    const [instadata, setInstaData] = useState([]);

    const [selectVal, setSelectedVal] = useState("Instagram");
    const [hide, setHide] = useState(false);

    const [genderData, setGenderData] = useState(data1);
    const [genderDataGraph, setGenderDataGraph] = useState([]);

    const setGraphData = () => {
        if (genderData) {
            let genderDataGraph1 = {};
            for (let key in genderData) {
                let keySplit = key.split('.')[1];
                if (keySplit in genderDataGraph1) {
                    genderDataGraph1[keySplit] += genderData[key];
                } else {
                    genderDataGraph1[keySplit] = genderData[key];
                }
            }
            // key the object with key as name and value as value
            let genderDataGraphArray = [];
            for (let key in genderDataGraph1) {
                genderDataGraphArray.push({ name: key, 'followers': genderDataGraph1[key] });
            }
            setGenderDataGraph(genderDataGraphArray);
            console.log(genderDataGraphArray);
        };
    };


    useEffect(() => {
        setGraphData();

        // axiosInstance.get('/meta/getFBInsights')
        //     .then(
        //         result => {
        //             if (result.status === 201) {
        //                 console.log("my results = ", result.data.data);
        //                 setData(result.data.data);
        //             }
        //         }
        //     ).catch(error => {
        //         console.log(error);
        //         if (error?.code === "ERR_NETWORK") {
        //             toast.error("Network Error!");
        //         }
        //         else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
        //             // toast.error(error.response.data.message);
        //             console.log(error.response.data.message);
        //         }
        //         else {
        //             toast.error("Something went wrong! Please try again.");
        //         }
        // })




        // insta
        // axiosInstance.get('/meta/getInstaInsights')
        //     .then((result) => {
        //         if (result.status === 201) {
        //             console.log("my results = ", result.data.data);
        //             setInstaData(result.data.data);
        //         }
        //     }
        //     ).catch((error) => {
        //         if (error?.code === "ERR_NETWORK") {
        //             // toast.error("Network Error!");
        //             console.log("network err");
        //         }
        //         else if (!error?.response?.data?.message) {
        //             console.log(error.response.data.message);
        //         }
        //         else {
        //             console.log('insta insights error');
        //             // toast.error("Something went wrong! Please try again.");
        //         }
        //     })

    }, []);




    return <div className="flex-1  p-10 rounded-lg border-[1px] border-b-slate-300">
        <div className="w-full dark:bg-gray-900 dark:text-gray-100">
            <div className="horizontal container">
                <div className="flex items-center justify-between">
                    <div className="text-4xl text-bold text-black font-poppins" >Insights</div>

                    <div class="relative">
                        <button class="w-36 rounded-md font-poppins flex items-center justify-between h-10 pl-3 pr-2 border border-black focus:outline-none">
                            <span class="leading-none">
                                {selectVal}
                            </span>
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div className={`${hide ? 'hidden' : 'hidden'} absolute flex-col w-40 mt-1 border border-black shadow-lg`}>
                            <span class="flex items-center h-8 px-3 text-sm hover:bg-gray-200" onClick={() => {
                                setSelectedVal("Instagram");
                                setHide(true);
                            }}>Instagram</span>
                            <span class="flex items-center h-8 px-3 text-sm hover:bg-gray-200" onClick={() => {
                                setSelectedVal("Facebook");
                                setHide(true);
                            }}>Facebook</span>
                        </div>
                    </div>


                </div>

                <div className="flex w-full rounded-lg h-[340px] mt-4 box-shadow-custom overflow-hidden">
                    <div className="relative flex justify-center items-center w-full h-[310px]">
                        <ResponsiveContainer>
                            <BarChart data={genderDataGraph}>
                                <defs>
                                    {/* <LinearGradient id="followers">
                                        <stop offset="5%" stopColor="red" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="red" stopOpacity={0}/>
                                    </LinearGradient> */}

                                </defs>
                                <XAxis dataKey="name" tickLine={false} />
                                <YAxis tickLine={false} />
                                <Tooltip />
                                <Legend verticalAlign="top" />
                                <Bar dataKey="followers" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                        {/* <p className="absolute bottom-[-15px] text-center text-[#8884d8]">Age Group</p> */}
                    </div>
                </div>

                <VerticalBarChart />




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
                {/* <div className="text-4xl text-bold text-black p-10 font-poppins " >Instagram Insights</div> */}
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

