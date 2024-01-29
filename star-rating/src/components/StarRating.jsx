import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating, color }) => {
  const [selectedStarRating, setSelectedStarRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div className="flex gap-4 mt-14 mx-auto w-[720px] justify-center">
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          full={tempRating ? tempRating >= i + 1 : selectedStarRating >= i + 1}
          index={i + 1}
          onRatingSelect={setSelectedStarRating}
          onHover={setTempRating}
          color={color}
        />
      ))}
    </div>
  );
};

export default StarRating;
