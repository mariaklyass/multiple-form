import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle(e: any) {
    e.preventDefault();
    setIsShowing(!isShowing);
  }
  return { isShowing, toggle };
};

export default useModal;
