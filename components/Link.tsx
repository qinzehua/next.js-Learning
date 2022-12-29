import { useState } from "react";
import type { FC, ReactNode } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

interface Props {
    page: string;
    children: ReactNode
}

const Link: FC<Props> = function ({ page, children }) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;
