import React, { useState} from 'react';
//import DotLoader from "react-spinners/DotLoader";
//import BeatLoader from "react-spinners/BeatLoader"
import PacmanLoader from "react-spinners/PacmanLoader"
//import PropagateLoader from "react-spinners/PropagateLoader"


// eslint-disable-next-line react/display-name
const Question= React.forwardRef((props, ref) => {
    let [color, setColor] = useState("#36d7b7");
  
    const[loading,setloading]=useState(false)
    const [response,setresponse]=useState(false)
    return (
      <div ref={ref}  className='flex flex-col  
       items-center gap-8' style={{  width:'60vw', height:'95vh', border: '1px solid #ccc',  }}>
        

        <h1 className='text-5xl mt-10 py-10  italic'>
        Generate the Equation using AI
        </h1>

        <div className='flex flex-col items-center gap-4 my-10'>
            <div className=' text-black'>
                <input className='w-[40vw] px-5 py-2.5 me-2 mb-2 text-center font-medium' type="text" placeholder='Enter the Math Word Problem here...'></input>
            </div>
            <div>
            <button onClick={()=>{
                setloading(true)
            }} type="button" disabled={loading} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-sm shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2">Generate Equation</button>
            </div>
        </div>

        {loading &&  <PacmanLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
        

        {
            response && <div>
                hey it is responding
            </div>
        }
      </div>
    );
  });
  
  export default Question;