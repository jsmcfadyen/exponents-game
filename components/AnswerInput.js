import { useState, useEffect } from "react";

const SG_AnswerInput = ({ onGuess }) => {
  const [response, setResponse] = useState(0);

  const handle_change = (event) => {
    const value = event.target.value;
    setResponse(value);
  };

  const guess = () => {
    onGuess(response);
    setResponse("");
  };

  const handle_keypress = (event) => {
    if (event.key == "Enter") {
      guess();
    }
  };

  return (
    <>
      <div className="px-3">
        <input
          className="text-5xl "
          type="number"
          placeholder="?"
          value={response}
          onKeyDown={handle_keypress}
          onChange={handle_change}
        />
        <button
          onClick={guess}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
        >
          Submit
        </button>
      </div>
    </>
  );
};
export default SG_AnswerInput;
