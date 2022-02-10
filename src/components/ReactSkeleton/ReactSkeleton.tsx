import React from "react";

import "./ReactSkeleton.scss";

interface Props {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  backgroundColor?: string;
  count?: number;
}

const ReactSkeleton = ({
  width = "100%",
  height = 18,
  borderRadius = 5,
  backgroundColor = "#cdcdcd",
  count = 1,
}: Props) => {
  const arr = Array.from(Array(count).keys());

  return (
    <span className="loading" style={{ width, height }}>
      {arr.map((c) => (
        <span key={c} style={{ borderRadius, backgroundColor }} />
      ))}
    </span>
  );
};

export default ReactSkeleton;
