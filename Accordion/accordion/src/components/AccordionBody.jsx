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
    <div>
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
