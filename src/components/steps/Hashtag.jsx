import { useStepperContext } from "../contexts/StepperContext";
import ListBox from "./listBox";
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

export default function Hashtag() {

	const [isLoading, setLoading] = useState(false);
	const [hashtags, setHashtags] = useState([]);
	const { prompt, caption, setHastag } = usePosterContent();
	const [selectedHashtags, setSelectedHashtags] = useState('');


	const makeSelection = (index) => {
		let temp = [...hashtags];
		temp[index].selected = !temp[index].selected;
		// filter the selected hashtags
		let selectedHashtags = temp.filter(item => item.selected);
		// make a string of selected hashtags
		let hashtagsString = selectedHashtags.map(item => item.name).join(' #');
		setSelectedHashtags(`#${hashtagsString}`);
		let hashtagsString1 = selectedHashtags.map(item => item.name).join(' %23');
		setHastag(`%23${hashtagsString1} %23digisync`);
	}

	const fetchData = (e) => {
		e.preventDefault();
		setLoading(true);
		axiosInstance.post('/post/hashtags', {
			"caption": `${prompt} ${caption}`,
		}).then(
			result => {
				setLoading(false);
				toast.success('Text Generated, Move forward to next step');
				setHashtags(result.data);
				setSelectedHashtags('');
				setHastag(``);
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
				<h4 className="text-xl font-semibold">Hashtag generation:</h4>
				<p className="mb-10">{prompt} <br />{caption}<br />
					<span className="font-bold">
						{selectedHashtags}
					</span>
				</p>

				<div className="space-y-8 ng-untouched ng-pristine ng-valid flex flex-col gap-x-4 w-full z-20">
					<Button onClick={fetchData} size={SIZE.compact} className="px-10 w-full text-md font-roboto font-bold border rounded bg-black hover:bg-gray-800 text-white" isLoading={isLoading} >Generate</Button>
				</div>
				{hashtags.length !== 0 &&
					<div className="h-[300px] overflow-y-scroll mt-8 scroll-smooth -webkit-scrollbar-track:rounded scroll_r_adjust scroll_w_adjust scroll_t_adjust z-0">
						<div className="flex flex-row flex-wrap">
							{
								hashtags.map((item, index) => {
									return (
										!item.isHidden &&(<div className="relative" key={item.id}>
											<p className={`m-4 p-4 box-shadow-custom rounded-lg mt-4 text-sm font-poppins ${item.selected && 'border-green-600 border-2'} `} onClick={() => { makeSelection(index) }}>#{item.name}</p>
											{item.selected && <img src={selectIcon} width="22px" height="22px" className="absolute right-[10px] top-[10px] bg-white" alt="SelectedIcon" />}
										</div>)
									)
								})}
						</div>
					</div>}
			</div>
		</div>
	);
}

