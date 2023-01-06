// import { useStepperContext } from "../../contexts/StepperContext";
import Accordion from "../accordion";
import { Disclosure } from '@headlessui/react'
import Card from "../card";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from '../../axios/axiosinstance';
import { toast } from 'react-toastify';
import { useState } from "react";
import { Button, SIZE } from "baseui/button";
import usePosterContent  from "../../hooks/usePosterContent";

import ListBox from "../listBox";
import selectIcon from '../../media/Images/check.png';

const people = [
	{ name: 'Artificial Intelligence' },
	{ name: 'Software Engineering' },
	{ name: 'Data Science' },
	{ name: 'Cyber Security' },
	{ name: 'Robotics' },
	{ name: 'IoT' },
	{ name: 'life' },
	{ name: 'happiness' },
	{ name: 'love' },
	{ name: 'truth' },
	{ name: 'inspiration' },
	{ name: 'humor' },
	{ name: 'philosophy' },
	{ name: 'science' },
	{ name: 'soul' },
	{ name: 'books' },
	{ name: 'wisdom' },
	{ name: 'knowledge' },
	{ name: 'education' },
	{ name: 'poetry' },
	{ name: 'hope' },
	{ name: 'friendship' },
	{ name: 'writing' },
	{ name: 'religion' },
	{ name: 'death' },
	{ name: 'romance' },
	{ name: 'success' },
	{ name: 'arts' },
	{ name: 'relationship' },
	{ name: 'motivation' },
	{ name: 'faith' },
	{ name: 'mind' },
	{ name: 'god' },
	{ name: 'funny' },
	{ name: 'quotes' },
	{ name: 'positive' },
	{ name: 'purpose' },
	{ name: 'fashion' },
	{ name: 'sports' },
	{ name: 'nature' },
	{ name: 'technology' },
	{ name: 'food' }

]









export default function Background() {
	const [loading, setloading]= useState(false);
	const { prompt,setPrompt,image,setImage}= usePosterContent();
	const formik = useFormik({
		initialValues: {
			prompt: prompt,
		},
		validationSchema: Yup.object({
			prompt: Yup.string()
				.min(3, 'Too Short!')
				.max(200, 'Too Long!')
		}),
		onSubmit: (values) => {
			if(!loading){
				setloading(true);
				axiosInstance.post('/post/midJourneyGraphics', {
					"prompt": values.prompt
	
				}, {timeout:120000000}).then(result => {
					console.log(result.data);
					setImage(result.data.generation);
					setPrompt(values.prompt);
					setloading(false);
					toast.success('Background Generated, Move forward to next step');

				}
				).catch(error => {
					setloading(false);
					console.log(error);
					if ('response' in error && 'data' in error.response && 'message' in error.response.data) {
						toast.error(error.response.data.message);
					}
					else {
						toast.error("Something went wrong! Please try again.");
					}
				})
			}else{
				toast.error("Please wait for the previous request to complete");
			}
		}
	});


	const [selected, setSelected] = useState(people[0]);
	const [isLoading, setLoading] = useState(false);
	const [selectedText, setSelectedText] = useState(0);
	const { setCatagory, posterText, setPosterText, setIndex } = usePosterContent();

	const fetchData = (e) => {
		e.preventDefault();
		setLoading(true);
		axiosInstance.post('/post/posterContent', {
			"prefix": `_TOPIC_ ${selected.name} _QUOTE_`,
			"temperature": 0.7,
			"batch_size": 10
		}).then(
			result => {
		setPosterText(result.data);
		// setPosterText(["AI is controlling and moving the content creation to new ERA"]);

		setCatagory(selected.name);
		setLoading(false);
		toast.success('Text Generated, Move forward to next step');
				console.log(result.data);
			}
		).catch(error => {
			setLoading(false);
			console.log(error);
			if ('response' in error && 'data' in error.response && 'message' in error.response.data) {
				toast.error(error.response.data.message);
			}
			else {
				toast.error("Something went wrong! Please try again.");
			}
		});
	}


	return (
		<>
			<div className="flex flex-col ">
				<div className="mx-2 w-full flex-1">
					<h4 className="text-xl font-semibold">Background generation:</h4>
					<p className="mb-10">Enter a prompt to generate Background Image for your poster.For example, A robot trying to learn programming. </p>
					<form onSubmit={formik.handleSubmit} action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
						<div className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="prompt" className="block text-sm">Image Prompt</label>
								<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.title} type="text" name="prompt" id="prompt" placeholder="prompt" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]" />
								{formik.touched && formik.errors.title ? <p className="text-red-600 text-xs">{formik.errors.title}</p> : null}
							</div>
							<Button type="submit" size={SIZE.compact} className="px-10 py-1 mt-2 w-full text-md font-roboto font-bold border rounded bg-black hover:bg-gray-800 text-white" isLoading={loading} >Search</Button>
						</div>
					</form>
					<Accordion content={
						<Disclosure.Panel className="grid grid-cols-2 pt-4 text-black">
							{image.map((item, index) => {
								return (
									<Card key={index} image={item} />
								)
							})}
						</Disclosure.Panel>
					} />
				</div>
				
				<div className="mx-2 w-full flex-1">
					<h4 className="text-xl font-semibold">Text generation:</h4>
					<p className="mb-10">Select a category  from the options below to generate mind blowing text for your Poster. </p>

					<div className="space-y-8 ng-untouched ng-pristine ng-valid flex flex-col gap-x-4 w-full z-20">
						<div className="space-y-4 flex-1">
							<div className="space-y-2">
								<label htmlFor="prompt" className="block text-sm">Category</label>
								<ListBox setSelected={setSelected} selected={selected} className="px-10 py-1 mt-2 w-full text-md font-roboto font-bold rounded border-2" />
							</div>
						</div>
						<Button onClick={fetchData} size={SIZE.compact} className="px-10 w-full text-md font-roboto font-bold border rounded bg-black hover:bg-gray-800 text-white" isLoading={isLoading} >Generate</Button>
					</div>
					{
						posterText.length !== 0 &&
						<div className="h-[300px] overflow-y-scroll mt-8 scroll-smooth -webkit-scrollbar-track:rounded scroll_r_adjust scroll_w_adjust scroll_t_adjust z-0">
							{posterText.map((item, index) => {
								return (
									<div className="flex relative" key={index}>
										<p className={`m-4 p-4 w-full shadow-lg rounded-lg mt-4 text-sm font-poppins ${(index === selectedText) && 'border-green-600 border-2'} `} onClick={() => {
											setSelectedText(index);
											setIndex(index);
										}} >{item}</p>
										{(index === selectedText) && <img src={selectIcon} width="22px" height="22px" className="absolute right-[10px] top-[10px] bg-white" alt="SelectedIcon" />}
									</div>
								)
							})}
						</div>
					}
				</div>
			</div>
		</>
	);
}
