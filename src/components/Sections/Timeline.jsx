import { Box, Typography } from "@mui/material";
// import timelineImage from "../../../public/Photos/Engagement/DSC02799.jpeg"; // 👈 update f
import { eventDetails } from "../../assets/textList";
// ilename/path as needed

const SERIF = "'Palatino Linotype', 'Book Antiqua', Palatino, serif";

const Timeline = ({
  titleScriptPart = "The",
  titleSerifPart = "PROGRAM",
  events = eventDetails,
  imageSrc = "/Photos/Engagement/DSC03766.jpeg",
  imageAlt = "Wedding photo",
  accentColor = "#656440",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        // width: "%",
        // aspectRatio: { md: "16 / 9" },
        fontFamily: SERIF,
        overflow: "hidden",
        borderRadius: "4px",
      }}
    >
      {/* ── Left: schedule ── */}
      <Box
        sx={{
          backgroundColor: accentColor,
          flex: { md: "0 0 57%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 3, sm: 5, md: "7%" },
          py: { xs: 4, sm: 5, md: "5%" },
          color: "#fff",
        }}
      >
        {/* Title */}
        <Box sx={{ mb: { xs: 2, sm: 3, md: "6%" }, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              // fontFamily: SERIF,
              // fontStyle: "italic",
              fontSize: { xs: "1.0rem", md: "2.8rem" },
              fontWeight: 400,
              lineHeight: 1,
              mb: "-4px",
              color: "#fff",
            }}
          >
            {titleScriptPart}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "normal",
              fontSize: { xs: "1.0rem", md: "2.8rem" },
              fontWeight: 400,
              letterSpacing: "0.35em",
              color: "#fff",
            }}
          >
            {titleSerifPart}
          </Typography>
        </Box>

        {/* Event rows */}
        {events.map((ev, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              mb: { xs: 1, sm: 1.5, md: "clamp(8px, 2%, 22px)" },
              gap: { xs: "6%", md: "8%" },
              width: "100%",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "italic",
                fontSize: {
                  xs: "0.85rem",
                  sm: "1rem",
                  md: "clamp(30px, 2.2vw, 22px)",
                },
                textAlign: "right",
                minWidth: { xs: "30%", md: "26%" },
                flexShrink: 0,
                color: "#fff",
              }}
            >
              {ev.time}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "normal",
                fontSize: {
                  xs: "0.85rem",
                  sm: "1rem",
                  md: "clamp(30px, 2.2vw, 22px)",
                },
                minWidth: { xs: "30%", md: "26%" },
                color: "#fff",
              }}
            >
              {ev.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ── Right: photo ── */}
      <Box
        sx={{
          flex: { md: "0 0 43%" },
          minHeight: { xs: 200, sm: 280, md: "auto" },
          overflow: "hidden",
          backgroundColor: "#1a1a1a",
        }}
      >
        {imageSrc ? (
          <Box
            component="img"
            src={imageSrc}
            alt={imageAlt}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              filter: "brightness(0.85)",
            }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #2a2e1e 0%, #1a1a1a 100%)",
              gap: 1,
            }}
          >
            <Typography sx={{ fontSize: 32, opacity: 0.35 }}>📷</Typography>
            <Typography
              sx={{ color: "#555", fontSize: 13, letterSpacing: "1px" }}
            >
              Pass imageSrc prop
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Timeline;
