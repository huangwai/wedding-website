import { Box, Typography } from "@mui/material";
import timelineImage from "../../../public/Photos/Engagement/DSC02799.jpeg"; // 👈 update filename/path as needed

export default function Timeline() {
  return (
    <Box
      textAlign="center"
      id="timeline"
      sx={{
        py: { xs: 12, md: 18 },
        px: { xs: 4, sm: 8, md: 16 },
        bgcolor: "#3b1717",
        color: "#f2efe8",
      }}
    >
      <Typography gutterBottom variant="h2">
        Timeline
      </Typography>

      <Box
        component="img"
        src={timelineImage}
        alt="Wedding Timeline"
        sx={{
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          mx: "auto",
          display: "block",
          borderRadius: 2,
        }}
      />
    </Box>
  );
}
