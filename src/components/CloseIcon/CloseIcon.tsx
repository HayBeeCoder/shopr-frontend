import React from "react";
import { ReactComponent as Close } from "../../assets/svgs/close.svg";

interface Props {
  handleClick: (e: React.FormEvent) => void;
}

const CloseIcon: React.FC<Props> = ({ handleClick }) => {
  return (
    <button className="text-[32px] p-1 " onClick={handleClick}>
      <Close />
    </button>
  );
};

export default CloseIcon;
