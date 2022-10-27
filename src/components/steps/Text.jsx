// import { useStepperContext } from "../../contexts/StepperContext";
import { Disclosure } from '@headlessui/react'
import Accordion from "../accordion";
import { useStepperContext } from "../contexts/StepperContext";
import ListBox from "../listBox";
import { useEffect, useState } from 'react';
import { Button, SIZE } from 'baseui/button';
import { toast } from 'react-toastify';
import axiosInstance from '../../axios/axiosinstance';

// 'life', 'happiness', 'love', 'truth', 'inspiration', 'humor', 'philosophy', 'science', 'soul', 'books', 'wisdom', 'knowledge', 'education', 'poetry', 'hope', 'friendship', 'writing', 'religion', 'death', 'romance', 'success', 'arts', 'relationship', 'motivation', 'faith', 'mind', 'god', 'funny', 'quotes', 'positive', 'purpose', 'fashion', 'sports', 'nature', 'technology', 'food', 'Robotics', 'IoT', 'Cyber Security', 'Artificial Intelligence', 'Data Science', 'Software Engineering'

const people = [
  { name: 'Artificial Intelligence' },
  { name: 'Software Engineering' },
  { name: 'Data Science' },
  { name: 'Cyber Security' },
  { name: 'Robotics' },
  { name: 'IoT' },
  {name:'life'},
  {name:'happiness'},
  {name:'love'},
  {name: 'truth'},
  {name: 'inspiration'},
  {name:'humor'},
  {name: 'philosophy'},
  {name: 'science'},
  {name: 'soul'},
  {name:'books'},
  {name: 'wisdom'},
  {name:'knowledge'},
  {name:'education'},
  {name: 'poetry'},
  {name:'hope'},
  {name:'friendship'},
  {name:'writing'},
  {name:'religion'},
  {name:'death'},
  {name:'romance'},
  {name:'success'},
  {name:'arts'},
  {name:'relationship'},
  {name:'motivation'},
  {name:'faith'},
  {name: 'mind'},
  {name: 'god'},
  {name: 'funny'},
  {name:'quotes'},
  {name:'positive'},
  {name:'purpose'},
  {name:'fashion'},
  {name:'sports'},
  {name:'nature'},
  {name:'technology'},
  {name:'food'}

]



export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const [text, setText] = useState(["some text1", "some text2"]);
  const [selected, setSelected] = useState(people[0]);
  const [isLoading, setLoading] = useState(false);


  const fetchData = (e) => {
    e.preventDefault();
    // if (!setLoading) {
      setLoading(true);
      axiosInstance.post('/post/posterContent', {
        "prefix": `_TOPIC_ ${selected.name} _QUOTE_`,
        "temperature": 0.7,
        "batch_size": 10
      },).then(
        result => {
          setLoading(false);
          setText(result.data);
          console.log(result.data);
        }
      ).catch(error => {
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
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">

        <h4 className="text-xl font-semibold">Description:</h4>
        <p className="mb-10">Select a category  from the options below to generate mind blowing text for your Poster. </p>

        <div className="space-y-8 ng-untouched ng-pristine ng-valid flex gap-x-4 items-center">
          <div className="space-y-4 flex-1">
            <div className="space-y-2">
              <label htmlFor="prompt" className="block text-sm">Category</label>
              {/* <input type="text" name="prompt" id="email" placeholder="Prompt" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" /> */}
              <ListBox setSelected={setSelected} selected={selected} />
            </div>
          </div>
          <Button type="submit" onClick={fetchData} isLoading={isLoading}>Submit</Button>
        </div>
        {/* <Accordion content={<Disclosure.Panel className=" pt-4  text-black "> */}


        {/* </Disclosure.Panel>} /> */}
        {text.map((item, index) => {
          return (
            <p className='p-4 shadow-lg rounded-lg mt-4 text-sm font-poppins' key={index}>{item}</p>
          )
        })}
        <p className="mt-10">Select your Category and press next to continue</p>
      </div>
    </div>
  );
}
