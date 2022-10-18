// import { useStepperContext } from "../../contexts/StepperContext";
import { useStepperContext } from "../contexts/StepperContext";
import Heading3 from "../heading3";
import Paragraph from "../paragraph";
import axios from "axios";
import { useState } from "react";
import Accordion from "../accordion";


export default function Background() {

  const [token, setToken] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function getDalle2() {
    if (token != "" && query != "") {
      setError(false);
      setLoading(true);
      axios
        .post(`http://localhost:3000/api/dalle2?k=${token}&q=${query}`)
        .then((res) => {
          console.log(res);
          setResults(res.data.result);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    } else {
      setError(true);
    }
  }

  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <h4 className="text-xl font-semibold">Description:</h4>
        <p className="mb-10">Enter a prompt to generate Background Image for your poster.For example, A robot trying to learn programming. </p>
        <form  action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="prompt" className="block text-sm">Image Prompt</label>
                {/* <input type="text" name="prompt" id="email" placeholder="Prompt" className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" /> */}
                <input
                  id="token"
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Bearer Token"
                  className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
                
                <input
                  id="query"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Prompt"
                  className="w-full px-3 py-2 border rounded-md bg-neutral-300 placeholder:text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
                <button  className="px-10 py-2 mt-2 text-lg border rounded bg-black hover:bg-gray-800 text-white " onClick={getDalle2}>Get</button>
            </div>
          </div>
        </form>
        
        
        

        {/* {error ? (
          <div className={styles.error}>Something went wrong. Try again.</div>
        ) : (
          <></>
        )}{" "}
        {loading && <p>Loading...</p>}
        <div className={"grid grid-cols-2"}>
          
          {results.map((result) => {
            return (
              <div className={"w-1/4"}>
                <img
                  className={"rounded-sm"}
                  src={result.generation.image_path}
                  // onClick={() => download(result.generation.image_path)}
                />
              </div>
            );
          })}
        </div> */}
        <Accordion/>
        
        <p className="mt-10">Select your Background Image by tapping the image and press next to continue </p>

      </div>
      
      
    </div>
    
    </>
    
  );
}
