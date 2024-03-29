import { useCallback, useState } from "react";

export const useAnimateParams = () => {
  const [animateParams, setAnimateParams] = useState({
    X: 0,
    Y: 0,
    Opacity: 100,
    Scale: 1,
    Blur: 0,
    Speed: 0.1,
    Delay: 0.1,
    Easing: "ease",
    Replay: false,
  });

  const onChange = useCallback((e) => {
    e.target.name === "Replay"
      ? setAnimateParams((prev) => {
          return {
            ...prev,
            Replay: !prev.Replay,
          };
        })
      : setAnimateParams((prev) => {
          return {
            ...prev,
            [e.target.name]: e.target.value,
          };
        });
  }, []);

  return { animateParams, setAnimateParams, onChange };
};
