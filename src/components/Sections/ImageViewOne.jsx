import { Box } from "@mui/material";
import { imageList } from "../../assets/textList";

export default function ImageViewOne() {
  return (
    <Box
      component="img"
      src={imageList[0]}
      alt="Wedding photo"
      loading="lazy"
      sx={{
        width: "100%",
        maxHeight: { xs: "40vh", md: "80vh" },
        objectFit: "cover",
        display: "block",
        objectPosition: "50% 70%",
        transition: "filter 0.3s ease",
        filter: "blur(0px)",
        "&[data-loading]": { filter: "blur(10px)" },
      }}
    />
  );
}
