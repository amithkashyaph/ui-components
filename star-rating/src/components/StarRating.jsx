import React, { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  messages: PropTypes.array,
};

const StarRating = ({ maxRating, color, messages }) => {
  const [selectedStarRating, setSelectedStarRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div className="flex gap-10  mt-14 mx-auto w-[720px]  items-center">
      <div className="flex gap-4">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={
              tempRating ? tempRating >= i + 1 : selectedStarRating >= i + 1
            }
            index={i + 1}
            onRatingSelect={setSelectedStarRating}
            onHover={setTempRating}
            color={color}
          />
        ))}
      </div>
      <div>
        {messages?.length === maxRating ? (
          <h1 className="text-2xl">
            {messages[tempRating ? tempRating - 1 : selectedStarRating - 1]}
          </h1>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default StarRating;
