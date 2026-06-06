export const cardSx = {
  width: {
    xs: "100%",
    sm: "80%",
    md: 420,
  },
  aspectRatio: "3 / 2",
  borderRadius: 3,
  border: "1px solid rgba(66, 22, 3, 0.12)",
  backgroundColor: "#e8e2d4",
  color: "#421603",

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start", // 🔥 removes bottom spacing

  px: { xs: 2, md: 3 },
  pt: { xs: 2, md: 3 },
  pb: { xs: 1, md: 1.5 }, // 🔥 tighter bottom padding

  mx: "auto",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",

  "&:hover": {
    transform: { md: "translateY(-4px)" },
    boxShadow: { md: "0 10px 24px rgba(0,0,0,0.08)" },
  },
};
