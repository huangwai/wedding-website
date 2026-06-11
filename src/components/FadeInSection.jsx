import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

export default function FadeInSection({
  children,
  direction = "up",
  delay = 0,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(30px)";
      case "down":
        return "translateY(-30px)";
      case "left":
        return "translateX(30px)";
      case "right":
        return "translateX(-30px)";
      default:
        return "translateY(30px)";
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getTransform(),
        transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Box>
  );
}
