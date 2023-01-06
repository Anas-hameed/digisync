// import { useStepperContext } from "../../contexts/StepperContext";
import { useFormik } from "formik";
import * as Yup from "yup"
import usePosterContent from "../../hooks/usePosterContent";
import {Button, SIZE} from 'baseui/button';
import { useState } from "react";


export default function Additionals() {
	const [error, setError] = useState("");
	const { setTitle,setPromotion,setContact,setDescription} = usePosterContent();


	const formik = useFormik({
		initialValues: {
			title: "",
			promotions: "",
			contact: "",
			description: ""
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.min(3, 'Too Short!')
				.max(200, 'Too Long!'),
			promotions: Yup.string()
				.min(3, 'Too Short!')
				.max(200, 'Too Long!'),
			description: Yup.string()
				.min(3, 'Too Short!')
				.max(200, 'Too Long!')
		}),

		onSubmit: (values) => {
			setTitle(values.title);
			setPromotion(values.promotions);
			setContact(values.contact);
			setDescription(values.description);
		}
	});

	const handleSubmit=()=>{
		setTitle(formik.values.title);
		setPromotion(formik.values.promotions);
		setContact(formik.values.contact);
		setDescription(formik.values.description);
	}


	return (
		<div className="flex flex-col">
			<div className="w-full mx-2 flex-1">
				<h4 className="text-xl font-semibold">Additionals:</h4>
				<p className="mb-10">Enter the following details to create a stunning poster with CTA and logos etc. </p>

				<div className="space-y-8 ng-untouched ng-pristine ng-valid">
					<div className="space-y-4">
						<div className="space-y-2">
							<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.title} type="text" name="title" id="title" placeholder="Title" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]" />
							{formik.touched && formik.errors.title ? <p className="text-red-600 text-xs">{formik.errors.title}</p> : null}
						</div>
						<div className="space-y-2">
							<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.promotions} type={"text"} name="promotions" id="promotions" placeholder="Promotions" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]" />
							{formik.touched && formik.errors.promotions ? <p className="text-red-600 text-xs">{formik.errors.promotions}</p> : null}
						</div>
						<div className="space-y-2">
							<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contact} type="tel" name="contact" id="contact" placeholder="Contact" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]" />

						</div>
						<div className="space-y-2">
							<input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.description} type={"text"} name="description" id="description" placeholder="Description" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-[#1976d2]" />
							{formik.touched && formik.errors.description ? <p className="text-red-600 text-xs">{formik.errors.description}</p> : null}
						</div>
						<Button onClick={handleSubmit} className="px-10 py-1 mt-2 w-full text-md font-roboto font-bold border rounded bg-black hover:bg-gray-800 text-white " >Add</Button>
						{
						// error?.length?
						// <p className="mt-10">{error}</p>:
						// <p className="mt-10">Sucessfully added the imformation</p>
						}

					</div>
				</div>
			</div>
		</div>
	);
}
