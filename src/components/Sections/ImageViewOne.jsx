import { Box } from "@mui/material";
import { imageList } from "../../assets/textList";

export default function ImageViewOne() {
  return (
    <Box
      component="img"
      src={imageList[0]}
      alt="Wedding photo"
      sx={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}
