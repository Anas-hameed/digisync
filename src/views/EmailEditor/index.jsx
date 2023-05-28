import { useEffect, useRef, useState } from 'react';
import EmailEditor from 'react-email-editor';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axios/axiosinstance';
import EmailEditorNavBar from '~/components/home/EmailEditor/navbar';
import SimplifiedMail from './SimplifiedMail';
import { toast } from 'react-toastify';



const EmailEditorComponent = () => {
    const [height, setHeight] = useState(600);
    const [checkboxes, setCheckboxes] = useState([false, true]);
    const emailEditorRef = useRef(null);
    const [template, setTemplate] = useState({});
    const { id } = useParams();
    useEffect(() => {
        setHeight(Number.parseInt(window.innerHeight) - 70);
        axiosInstance.get(`/template/?id=${id}`).then(
            result => {
                if (result.status === 200) {
                    setTemplate(result.data);
                }
            }
        ).catch(error => {
            console.log(error);
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

    const [smsOutput, setSmsOutput] = useState('Greeting there,\n\n I am a AI powered bot. The key to creating effective marketing campaigns is to deliver value to your audience by providing relevant, informative, and engaging content that helps them solve a problem or meet a need.\n\n I am here to help you with your work. I can help you generate content. Please Provide a simple subject with some keyword and I will try my best to generate the quality content for your email marketing or email marketing needs \n\nRegards:\n your AI powered text generation Copilot\n\n');

    // submit the mail 
    const submitMail = (mailList,name) => {
        if (mailList.length !== 0) {
            let body = {};
            if (checkboxes[0] !== checkboxes[1]) {
                emailEditorRef.current.editor.exportHtml((data) => {
                    const { html } = data;
                    body = {
                        name: name,
                        "template": 1,
                        "html": JSON.stringify(html),
                        "mailList": mailList
                    }
                    axiosInstance.post(`/template/sendTemplateEmail`, body).then(
                        result => {
                            if (result.status === 200) {
                                toast.success("Mail Sent Successfully");
                            }
                        }
                    ).catch(error => {
                        console.log(error);
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
                });
            } else {
                body = {
                    name: name,
                    // stringfy the html
                    "template": 0,
                    "html": JSON.stringify(smsOutput),
                    "mailList": mailList
                }
                axiosInstance.post(`/template/sendTemplateEmail`, body).then(
                    result => {
                        if (result.status === 200) {
                            toast.success("Mail Sent Successfully");
                        }
                    }
                ).catch(error => {
                    console.log(error);
                    if (error?.code === "ERR_NETWORK") {
                        toast.error("Network Error!");
                    }
                    else if ('response' in error && 'data' in error.response && 'message' in error?.response?.data) {
                        toast.error(error.response.data.message);
                    }
                    else {
                        toast.error("Something went wrong! Please try again.");
                    }
                });
            }
        } else {
            toast.error("Please select atleast one email");
        }
    };



    if (checkboxes[0] !== checkboxes[1]) {
        const onReady = () => {
            // editor is ready
            emailEditorRef.current.editor.loadDesign(template);
        };

        return (
            <div className='flex-1 h-screen'>
                <EmailEditorNavBar submitMail={submitMail} name={template.name} checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
                <div className="w-full rounded-lg">
                    <div className='relative'>
                        <div className='w-[281px] bg-[#f9f9f9] h-[60px] absolute bottom-0 right-[72px]'>
                        </div>
                        <EmailEditor appearance={
                            {
                                panels: {
                                    tools: {
                                        collapsible: true
                                    }
                                },

                            }}

                            options={{
                                customCSS: ["body{background:red !important}"],
                            }}

                            minHeight={height}
                            ref={emailEditorRef} onReady={onReady} />
                    </div>
                </div>
            </div>
        );
    } else {
        return <div className='flex-1'>
            <EmailEditorNavBar submitMail={submitMail} name={"Identiy Verification"} checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
            <SimplifiedMail smsOutput={smsOutput} setSmsOutput={setSmsOutput} />
        </div>
    }

}

export default EmailEditorComponent;