export const cardSx = {
  height: "100%",
  minWidth: "50vw",
  maxWidth: "75vw",
  borderRadius: 3,
  border: "1px solid rgba(66, 22, 3, 0.12)",
  backgroundColor: "#e8e2d4",
  color: "#421603",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  "&:hover": {
    transform: { md: "translateY(-4px)" },
    boxShadow: { md: "0 10px 24px rgba(0,0,0,0.08)" },
  },
};
