import { useState } from "react";
import "./MyAccordion.css";

const MyAccordion = ({ ques, ans }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="MyAccordion-quesDiv">
        <p onClick={() => setShow(!show)}>{show ? "-" : "+"}</p>
        <h3>{ques}</h3>
      </div>
      {show && <p className="MyAccordion-p">{ans}</p>}
    </>
  );
};

export default MyAccordion;
