// eslint-disable-next-line no-unused-vars
import {useState,useRef, useEffect}from "react";
//import { Link } from 'react-router-dom'
import '../App.css'
import Question from "../Components/Question"; '../Components/Question.jsx'
export default function Home() {
  const componentRef=useRef(null);
  const [clicked,setclicked]=useState(false)
  const [toggle,settoggle]=useState(false);
  useEffect(()=>{
    if(clicked===true)
    {
      componentRef.current.scrollIntoView({behaviour:'smooth'})
    }

  },[clicked,toggle])
  const handleclick=()=>{
setclicked(true)
settoggle(!toggle)

  }
  return (
    <div className=" customcss  flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center h-[100vh] ">
      <h1 className="text-5xl text-center p-3 italic">
        {" "}
        Get Instant Equation for any Math Problems
      </h1>
      <h2 className="p-3 text-xl text-center">
        {" "}
        Enter your question and let our AI generate the equation you need
      </h2>
     
      <button onClick={handleclick} className=" cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
        {" "}
        Try it now
      </button>
      </div>
     

      {clicked && <Question ref={componentRef}/>}
     
    </div>
  );
}
