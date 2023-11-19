import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsShowing(!isShowing);
  }
  return { isShowing, toggle };
};

export default useModal;
