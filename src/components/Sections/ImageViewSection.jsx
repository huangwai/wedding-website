import { Box, Container } from "@mui/material";
import { imagePairList } from "../../assets/textList";

export default function ImageViewSection() {
  return (
    <Box sx={{ display: "flex", height: { xs: "45vh", md: "65vh" } }}>
      {imagePairList.map((src, i) => (
        <Box
          key={i}
          component="img"
          src={src}
          alt={`Wedding photo ${i + 1}`}
          sx={{
            width: "50%",
            height: "auto",
            // borderRadius: 2,
            objectFit: "cover",
          }}
        />
      ))}
    </Box>
  );
}
