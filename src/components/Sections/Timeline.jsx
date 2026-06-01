import { Box, Typography } from "@mui/material";
import { timelineItems } from "../../assets/textList";

export default function Timeline() {
  return (
    <Box
      textAlign="center"
      id="timeline"
      sx={{
        py: { xs: 12, md: 18 },
        px: { xs: 2, sm: 4 },
        bgcolor: "#3b1717",
        color: "#f2efe8",
      }}
    >
      <Typography gutterBottom variant="h2">
        Timeline
      </Typography>
      {/* <Box
        sx={{
          gap: { xs: 4, sm: 6 },
          textAlign: "center",
          maxWidth: "900px",
          mx: "auto",
          px: 2,
          py: { xs: 8, md: 10 },

          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
          },
        }}
      > */}
      {/* {timelineItems.map((item, index) => (
          <Box key={index}>
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: 70,
                height: 70,
                objectFit: "contain",
                mb: 1.5,
                mx: "auto",
              }}
            />
            <Typography variant="h3">{item.title}</Typography>
            <Typography>{item.time}</Typography>
          </Box>
        ))} */}
      <Typography
        sx={{ textAlign: "center" }}
        // justifyContent="center"
        // textAlign="center"
      >
        Coming soon!
      </Typography>
      {/* </Box> */}
    </Box>
  );
}
