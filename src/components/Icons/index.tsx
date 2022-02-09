import React from "react";

import Icon from "../../Constants/Icon";

import ThreeDots from "./ThreeDots";

interface IconProps {
  name: string;
}

const Icons: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case Icon.THREE_DOTS:
      return <ThreeDots />;

    default:
      return <div>No icon found</div>;
  }
};

export default Icons;
