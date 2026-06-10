import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

export default function FadeInSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 👈 fix: was entry.current
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }, // 👈 add rootMargin
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.9s ease",
      }}
    >
      {children}
    </Box>
  );
}
