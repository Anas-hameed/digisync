import { useStepperContext } from "../contexts/StepperContext";
import ListBox from "../listBox";
import { useState } from 'react';
import { Button, SIZE } from 'baseui/button';
import { toast } from 'react-toastify';
import axiosInstance from '../../axios/axiosinstance';
import selectIcon from '../../media/Images/check.png';
import usePosterContent from "~/hooks/usePosterContent";
const people = [
	{ name: 'Artificial Intelligence' },
	{ name: 'Software Engineering' },
	{ name: 'Data Science' },
	{ name: 'Cyber Security' },
	{ name: 'Robotics' },
	{ name: 'IoT' },
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

export default function Details() {
	const [selected, setSelected] = useState(people[0]);
	const [isLoading, setLoading] = useState(false);
	const [selectedText, setSelectedText] = useState(0);
	const { setCatagory, posterText, setPosterText } = usePosterContent();
	
	const fetchData = (e) => {
		e.preventDefault();
		setLoading(true);
		axiosInstance.post('/post/posterContent', {
			"prefix": `_TOPIC_ ${selected.name} _QUOTE_`,
			"temperature": 0.7,
			"batch_size": 10
		}).then(
			result => {
				setLoading(false);
				setPosterText(result.data);
				setCatagory(selected.name);
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
		<div className="flex flex-col">
			<div className="mx-2 w-full flex-1">
				<h4 className="text-xl font-semibold">Description:</h4>
				<p className="mb-10">Select a category  from the options below to generate mind blowing text for your Poster. </p>

				<div className="space-y-8 ng-untouched ng-pristine ng-valid flex flex-col gap-x-4 w-full">
					<div className="space-y-4 flex-1">
						<div className="space-y-2">
							<label htmlFor="prompt" className="block text-sm">Category</label>
							<ListBox setSelected={setSelected} selected={selected} className="px-10 py-1 mt-2 w-full text-md font-roboto font-bold rounded border-2" />
						</div>
					</div>
					<Button onClick={fetchData} size={SIZE.compact} className="px-10 w-full text-md font-roboto font-bold border rounded bg-black hover:bg-gray-800 text-white" on isLoading={isLoading} >Generate</Button>
				</div>
				{posterText.length &&
				<div className="h-[300px] overflow-y-scroll mt-8 scroll-smooth -webkit-scrollbar-track:rounded scroll_r_adjust scroll_w_adjust scroll_t_adjust">
					{posterText.map((item, index) => {
						return (
							<div className="flex relative">
								<p className={`m-4 p-4 w-full shadow-lg rounded-lg mt-4 text-sm font-poppins ${(index === selectedText) && 'border-green-600 border-2'} `} onClick={() => {
									setSelectedText(index);
								}} key={index}>{item}</p>
								{(index === selectedText) && <img src={selectIcon} width="22px" height="22px" className="absolute right-[10px] top-[10px] bg-white" alt="SelectedIcon" />}
							</div>
						)
					})}
				</div>}
			</div>
		</div>
	);
}

