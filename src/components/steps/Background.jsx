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
				.max(30, 'Too Long!')
		}),
		onSubmit: (values) => {
			if(!loading){
				setloading(true);
				axiosInstance.post('/post/graphics', {
					"prompt": values.prompt
	
				}).then(result => {
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


	return (
		<>
			<div className="flex flex-col ">
				<div className="mx-2 w-full flex-1">
					<h4 className="text-xl font-semibold">Description:</h4>
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
			</div>
		</>
	);
}
