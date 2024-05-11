import React from "react";

interface Props {
  classname: string;
  onClick?: () => void;
  children?: string;
}

const Button: React.FC<Props> = ({ classname, onClick, children }) => {
  return (
    <button onClick={onClick} className={classname}>
      {children}
    </button>
  );
};

export default Button;
