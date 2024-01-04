import React, { useState } from "react";
//import DotLoader from "react-spinners/DotLoader";
import BeatLoader from "react-spinners/BeatLoader";
//mport PacmanLoader from "react-spinners/PacmanLoader";
//import PropagateLoader from "react-spinners/PropagateLoader"
import "../App.css";

// eslint-disable-next-line react/display-name
const Question = React.forwardRef((props, ref) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  //#36d7b7
  let color = "#4fbeda";
  const [question, setquestion] = useState({});

  const [value, setvalue] = useState("2x+5y=3,6x+8y=9");
  const [loading, setloading] = useState(false);
  const [response, setresponse] = useState(false);
  const handlechange = (e) => {
    setquestion({...question,[e.target.id]: e.target.value});
    console.log(question);
  };

  const handleclick = async () => {
    setloading(true);
    console.log("didn't it called?");
    const res = await fetch("http://127.0.0.1:5000/math", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(question),
    });
    const data = await res.json();
    

    console.log(data);
    setTimeout(() => {
      if (data.success === true) {
        setloading(false);
        console.log("entered in this state");
        setresponse(true);
        setvalue(data.data);
      }
    }, 3000);
  };
  return (
    <div
      ref={ref}
      className="flex flex-col customcssquestion  
       items-center gap-8"
      style={{ width: "100vw", height: "100vh", border: "1px solid #ccc" }}
    >
      <h1 className="text-5xl mt-10 py-10  italic text-white">
        Generate the Equation using AI
      </h1>

      <div className="flex flex-col items-center gap-4 my-10">
        <div className=" text-black">
          <input
            className="w-[40vw] px-5 py-2.5 me-2 mb-2 text-center font-medium"
            type="text"
            placeholder="Enter the Math Word Problem here..."
            id="question"
            onChange={handlechange}
          ></input>
        </div>
        <div>
          <button
            onClick={handleclick}
            type="button"
            disabled={loading}
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-sm shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2"
          >
            Generate Equation
          </button>
        </div>
      </div>

      {loading && (
        <BeatLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}

      {response ? (
        <div className="text-black  flex flex-col items-center gap-4 my-10">
          <input
            readOnly
            className="text-black bg-slate-500 w-[40vw] px-5 py-2.5 me-2 mb-2 text-center font-medium rounded-3xl "
            type="textbox"
            value={value}
          ></input>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
});

export default Question;
