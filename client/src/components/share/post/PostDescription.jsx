import React, { useState } from "react";

const PostDescription = ({ description }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated((prev) => !prev);
  };

  return (
    <div className="post-description">
      {isTruncated ? (
        <>
          <div className="post-text font-bold">
            {description.slice(0, 100)}...{" "}
            {description.length > 100 && (
              <span
                onClick={toggleTruncate}
                className="underline cursor-pointer font-normal"
              >
                show More
              </span>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="post-text font-bold">{description}</div>
          <div onClick={toggleTruncate} className="underline cursor-pointer font-normal ">
            Show Less
          </div>
        </>
      )}
    </div>
  );
};

export default PostDescription;
