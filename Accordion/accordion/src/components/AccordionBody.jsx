import React from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

const AccordionBody = ({
  data,
  pos,
  handleClick,
  currentActiveAccordionPos,
}) => {
  const { title, content } = data;
  return (
    <div
      className={`${
        pos === currentActiveAccordionPos
          ? "shadow-lg border-t-8 border-blue-500"
          : ""
      } w-full`}
    >
      <AccordionHeader
        data={title}
        pos={pos}
        handleClick={handleClick}
        currentActiveAccordionPos={currentActiveAccordionPos}
      />
      {pos === currentActiveAccordionPos && <AccordionContent data={content} />}
    </div>
  );
};

export default AccordionBody;
