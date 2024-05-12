import React from "react";

interface Props {
  classname: string;
  children?: string;
}

const Typography: React.FC<Props> = ({ classname, children }) => {
  return <p className={classname}>{children}</p>;
};
export default Typography;
