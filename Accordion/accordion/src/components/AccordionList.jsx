import React, { useState } from "react";
import AccordionBody from "./AccordionBody";

const accrdionData = [
  {
    title: "Accordion Tile 1",
    content: "Accordion content 1",
  },
  {
    title: "Accordion Tile 2",
    content: "Accordion content 2",
  },
  {
    title: "Accordion Tile 3",
    content: "Accordion content 3",
  },
  {
    title: "Accordion Tile 4",
    content: "Accordion content 4",
  },
  {
    title: "Accordion Tile 5",
    content: "Accordion content 5",
  },
  {
    title: "Accordion Tile 6",
    content: "Accordion content 6",
  },
  {
    title: "Accordion Tile 7",
    content: "Accordion content 7",
  },
  {
    title: "Accordion Tile 8",
    content: "Accordion content 8",
  },
];

const AccordionList = () => {
  const [accordionPos, setAccordionPos] = useState(0);
  console.log(accordionPos);
  return (
    <div className="w-[750px] mx-auto mt-5">
      {accrdionData.map((a, i) => (
        <AccordionBody
          data={a}
          pos={i}
          key={i}
          handleClick={setAccordionPos}
          currentActiveAccordionPos={accordionPos}
        />
      ))}
    </div>
  );
};

export default AccordionList;
