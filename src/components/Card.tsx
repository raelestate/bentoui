import React from "react";

interface Props {
  classname: string;
  children?: any;
}

const Card: React.FC<Props> = ({ classname, children }) => {
  return <div className={classname}>{children}</div>;
};

export default Card;
