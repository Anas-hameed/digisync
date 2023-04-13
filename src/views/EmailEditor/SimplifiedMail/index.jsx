import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '~/axios/axiosinstance';
import { ThemeProvider, createTheme, lightThemePrimitives } from "baseui";
import { Button, SIZE } from "baseui/button";
import { toast } from 'react-toastify';


const SimplifiedMail = ({smsOutput, setSmsOutput}) => {

    const [prompt, setPrompt] = useState('');
    const [temperature, setTemperature] = useState(40);
    const [wordCount, setWordCount] = useState(50);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);


    const validateInput = () => {
        if (prompt === '') {
            toast.error('Please enter the subject');
            return false;
        }
        if (wordCount === '') {
            toast.error('Please enter the word count');
            return false;
        }
        if (wordCount > 200) {
            toast.error('Please enter less than 200 words');
            return false;
        }

        if (keyword === '') {
            toast.error('Please enter the keywords');
            return false;
        }

        return true;
    }


    const HandleSubmitGeneration = () => {
        if (validateInput()) {
            // list of keywords removing starting and ending spaces
            setLoading(true);
            // add a large timeout to show the loading state

            axiosInstance.post('/sms/generate', {
                prompt: prompt,
                temperature: temperature / 100,
                output_length: wordCount,
                keywords: keyword
            }).then(
                result => {
                    if (result.status === 200) {
                        // unstrigify the data
                        console.log(result.data.__text);
                        let data = JSON.parse(result.data.__text);
                        console.log(data);
                        // removal of the last sentence
                        const sentenceEndTokens = [".", "?", "!", "...", ":", ";"];
                        // find the last sentence end token
                        let lastSentenceEndTokenIndex = -1;
                        for (let i = 0; i < sentenceEndTokens.length; i++) {
                            const index = data.lastIndexOf(sentenceEndTokens[i]);
                            if (index > lastSentenceEndTokenIndex) {
                                lastSentenceEndTokenIndex = index;
                            }
                        }
                        data = data.substring(0, lastSentenceEndTokenIndex + 1);
                        // replace all the values between [] with string
                        data = data.replace(/\[.*?\]/g, ' ');
                        // relace (context) with empty string
                        data = data.replace(/\(context\)/g, ' ');

                        console.log("t2", data);


                        // break sentences on .
                        data = data.split('.');
                        // if last sentence is less than 5 words then remove it, and add greeting to the last sentence
                        if (data[data.length - 1].split(' ').length < 5) {
                            data[data.length - 2] = data[data.length - 2] + ".\n\nRegards:\n [Your text here]\n\n";
                            data.pop();
                        } else {
                            // add greeting after the last sentence
                            data[data.length - 1] = data[data.length - 1] + ".\n\nRegards:\n [Your text here]\n\n";

                        }
                        data = data.join('.');

                        // remove the first word till \n\n
                        data= data.split('\n');
                        // remove all the empty strings from the start
                        while(data[0]===''){
                            data.shift();
                        }
                        if(data[0].split(' ').length<5){
                            data[0]= 'Greeting [Replace it],';
                        }else{
                            data[0]= 'Greeting [Replace it],\n'+data[0];
                        }
                        data=data.join('\n\n');
                        data = data.replace(/\n\n\n\n\n/g, '\n\n');
                        // replace \n\n\n\n with \n\n
                        data = data.replace(/\n\n\n\n/g, '\n\n');
                        // replace \n\n\n with \n\n
                        data = data.replace(/\n\n\n/g, '\n\n');

                        // keep the word count as per the user input
                        setSmsOutput(data);
                        toast.success("SMS Generated Successfully!");
                        setLoading(false);
                    }
                }
            ).catch(error => {
                console.log(error);
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


    }

    return (
        <div className="flex-1">
            <div className={`mx-10 my-10 p-10 rounded-lg border-[1px] border-slate-300`} >
                <div className="text-4xl text-bold text-black font-poppins " >Email Generation</div>

                {/* box-shadow-custom p-6 rounded-lg */}
                <div className='my-6 box-shadow-custom p-6 rounded-lg'>
                    <p className='font-poppins font-bold text-gray-600 text-[24px] underline'>Model Parameters</p>
                    <div className='mt-[24px] flex-col flex gap-x-8'>
                        <div className="flex items-center gap-x-4">
                            <label htmlFor="subject" className="font-poppins font-bold text-gray-600 text-[18px]">Subject:</label>
                            <input type="text" name="subject" id="subject" placeholder="Enter the subject" onChange={(e) => { setPrompt(e.target.value) }} value={prompt} className="text-gray-700 font-poppins w-full pr-[35px] pl-[20px] py-[6px] border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]"
                            />
                        </div>
                        <div className='mt-[24px] flex gap-x-[50px]'>
                            <div className="flex flex-[0.5] items-center gap-x-4">
                                <label htmlFor="range_temp" className="font-poppins font-bold text-gray-600 text-[18px]">Temperature:</label>
                                <div className='flex-1 flex items-center'>
                                    <input id='range_temp' name='range_temp' type="range" min="0" max="200" value={temperature} onChange={(e) => {
                                        setTemperature(e.target.value);
                                    }} className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                                    <span htmlFor="range_temp" className="font-poppins font-bold text-gray-600 text-[18px] ml-4">{temperature / 100}</span>
                                </div>

                            </div>
                            <div className="flex flex-[0.5] items-center gap-x-4">
                                <label htmlFor="number" className="font-poppins font-bold text-gray-600 text-[18px]">Count:</label>
                                <input type="number" name="number" id="number" placeholder="Enter the word count" onChange={(e) => { setWordCount(e.target.value) }} value={wordCount} className="text-gray-700 font-poppins w-full pr-[35px] pl-[20px] py-[6px] border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]"
                                />
                            </div>
                        </div>
                        <div className='mt-[24px] flex justify-between gap-x-4'>
                            <div className="flex flex-1 items-center gap-x-4">
                                <label htmlFor="keyword" className="font-poppins font-bold text-gray-600 text-[18px]">Keyword:</label>
                                <input type="text" name="keyword" id="keyword" placeholder="Enter the keyword" onChange={(e) => { setKeyword(e.target.value) }} value={keyword} className="text-gray-700 font-poppins w-full pr-[35px] pl-[20px] py-[6px] border rounded-md bg-neutral-100 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]"
                                />
                            </div>
                            <ThemeProvider
                                theme={createTheme(lightThemePrimitives, {
                                    colors: {
                                        buttonPrimaryFill: "rgb(28,100,242)",
                                        buttonPrimaryHover: "rgb(26,86,219)"
                                    }

                                })}
                            >
                                <Button
                                    style={{ padding: "12px 20px", fontFamily: 'poppins', fontWeight: 'bold' }}
                                    size={SIZE.compact}
                                    onClick={HandleSubmitGeneration}
                                    disabled={loading}
                                >
                                    Generate Email
                                </Button>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>

                <div className='my-6 box-shadow-custom p-6 rounded-lg min-h-[400px]'>
                    <p className='font-poppins font-bold text-gray-600 text-[24px] underline'>Output Email</p>
                    {
                        loading ? (
                            <div className='flex min-h-[500px] w-full justify-center items-center'>
                                <div
                                    className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-900 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                    <span
                                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <p className='mt-6 text-gray-700 font-poppins' style={{ "whiteSpace": 'pre-line' }}>{smsOutput}</p>
                        )
                    }
                </div>

            </div>
        </div>
    );
}

export default SimplifiedMail;