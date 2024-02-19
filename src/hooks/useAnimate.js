export const useAnimate = (
  { X, Y, Replay, Opacity, Easing, Scale, Blur, Speed, Delay },
  ref
) => {
  const keyframes = {
    filter: ["blur(0)", `blur(${Blur}px)`],
    opacity: ["100%", `${Opacity}%`],
    transform: [
      "translate(0,0) scale(1)",
      `translate(${X}px,${Y}px) scale(${Scale})`,
    ],
  };

  const options = {
    delay: Delay * 1000,
    duration: Speed * 1000,
    iterations: Replay ? 2 : 1,
    easing: Easing,
  };

  const animate = () => {
    if (ref.current) {
      ref.current.animate(keyframes, options);
    }
  };
  return { animate };
};
