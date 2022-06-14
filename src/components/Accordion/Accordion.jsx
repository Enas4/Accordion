import { Data } from "../Data";
import { useState } from "react";
import MyAccordion from "../MyAccordion/MyAccordion";
import "./Accordion.css";

const Accordion = () => {
  const [data, setData] = useState(Data);
  return (
    <>
      <section>
        <h1>Interview Question</h1>
        <br />
        {data.map((currEle) => {
          const { id } = currEle;
          return <MyAccordion key={id} {...currEle} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
