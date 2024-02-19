import { useRef } from "react";

export const useClickTarget = () => {
  const elementRef = useRef();

  const addClassName = () => {
    if (elementRef.current) {
      elementRef.current.classList.add("newClassName");
    }
  };

  const removeClassName = () => {
    if (elementRef.current) {
      elementRef.current.classList.remove("newClassName");
    }
  };

  return { ref };
};
