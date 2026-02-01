import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children, direction = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (visible) return "translate(0, 0)";

    switch (direction) {
      case "left":
        return "translateX(-40px)";
      case "right":
        return "translateX(40px)";
      case "down":
        return "translateY(-40px)";
      default:
        return "translateY(40px)";
    }
  };

  return (
    // OUTER: blocks horizontal overflow
    <Box
      ref={ref}
      sx={{
        width: "100%",
        overflowX: "hidden", // 🔥 THIS is the fix
      }}
    >
      {/* INNER: animated content */}
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
