import React from "react";

const AccordionHeader = ({
  data,
  pos,
  handleClick,
  currentActiveAccordionPos,
}) => {
  return (
    <div
      className={`flex w-full px-10 py-5 items-center mb-2 box-border ${
        pos !== currentActiveAccordionPos
          ? "border shadow-lg hover:bg-slate-100"
          : ""
      } justify-between cursor-pointer `}
      onClick={() => handleClick(pos !== currentActiveAccordionPos ? pos : -1)}
    >
      <h1 className="w-1/12 text-lg ">{pos + 1}</h1>
      <h1 className="w-10/12 text-xl font-semibold">{data}</h1>
      <div className="self-end">
        {currentActiveAccordionPos !== pos ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default AccordionHeader;
