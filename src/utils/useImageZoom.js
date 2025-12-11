import { useRef, useState } from "react";

export function useImageZoom({ zoomScale = 2 } = {}) {
  const containerRef = useRef(null);
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    setIsHovered(true);

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setBackgroundPosition("center");
  };

  return {
    containerRef,
    backgroundPosition,
    handleMouseMove,
    handleMouseLeave,
    zoomScale,
    isHovered,
  };
}
