import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children, direction = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 🚫 stop observing = no re-animation
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px", // triggers slightly earlier
      },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (visible) return "translate3d(0, 0, 0)";

    switch (direction) {
      case "left":
        return "translate3d(-40px, 0, 0)";
      case "right":
        return "translate3d(40px, 0, 0)";
      case "down":
        return "translate3d(0, -40px, 0)";
      default:
        return "translate3d(0, 40px, 0)";
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        overflow: "hidden", // covers both axes safely
      }}
    >
      <Box
        sx={{
          opacity: visible ? 1 : 0,
          transform: getTransform(),
          transition: "opacity 0.8s ease, transform 0.8s ease",
          willChange: "opacity, transform",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
