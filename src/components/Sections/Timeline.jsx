import { Box, Typography } from "@mui/material";
import { eventDetails } from "../../assets/textList";
import FadeInSection from "../FadeInSection";

const SERIF = "'Palatino Linotype', 'Book Antiqua', Palatino, serif";

const Timeline = ({
  titleScriptPart = "The",
  titleSerifPart = "PROGRAM",
  events = eventDetails,
  imageSrc = "/Photos/Engagement/engagement004.jpeg",
  imageAlt = "Wedding photo",
  accentColor = "#656440",
}) => {
  return (
    <Box
      id="timeline"
      sx={{
        display: "flex",
        flexDirection: "row", // always side-by-side
        fontFamily: SERIF,
        overflow: "hidden",
        borderRadius: "4px",
        height: { xs: "45vh", md: "65vh" },
      }}
    >
      {/* ── Left: schedule ── */}
      <Box
        sx={{
          backgroundColor: accentColor,
          flex: "0 0 57%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 1.5, sm: 3, md: "7%" },
          py: { xs: 2, sm: 3, md: "5%" },
          // mt: "1rem",
          color: "#fff",
        }}
      >
        {/* Title */}
        {/* <FadeInSection direction="left"> */}
        <Box sx={{ mb: { xs: 1, sm: 2, md: "6%" }, textAlign: "center" }}>
          <FadeInSection direction="down" delay={300}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.8rem" },
                fontWeight: 400,
                lineHeight: 1,
                mb: "-4px",
                color: "#fff",
              }}
            >
              {titleScriptPart}
            </Typography>
          </FadeInSection>
          <FadeInSection direction="down" delay={300}>
            <Typography
              sx={{
                fontFamily: "Cormorant Garamond, serif",
                fontStyle: "normal",
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.8rem" },
                fontWeight: 400,
                letterSpacing: { xs: "0.15em", sm: "0.25em", md: "0.35em" },
                color: "#fff",
              }}
            >
              {titleSerifPart}
            </Typography>
          </FadeInSection>
        </Box>
        {/* </FadeInSection> */}

        {/* <FadeInSection direction="right" delay={300}> */}
        {/* Event rows */}
        {events.map((ev, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: { xs: 0.5, sm: 1, md: "clamp(8px, 2%, 22px)" },
              gap: { xs: "4%", sm: "6%", md: "8%" },
              width: "100%",
            }}
          >
            <FadeInSection direction="right" delay={300}>
              <Typography
                component="span"
                // variant="body"
                sx={{
                  fontStyle: "italic",
                  fontSize: {
                    xs: "0.85rem",
                    sm: "1.2rem",
                    md: "clamp(14px, 2.2vw, 22px)",
                  },
                  textAlign: "right",
                  minWidth: { xs: "35%", sm: "30%", md: "26%" },
                  flexShrink: 0,
                  color: "#fff",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {ev.time}
              </Typography>
            </FadeInSection>
            <FadeInSection direction="left" delay={300}>
              <Typography
                component="span"
                sx={{
                  justifyContent: "space-around",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Cormorant Garamond, serif",
                  fontStyle: "normal",
                  fontSize: {
                    xs: "0.85rem",
                    sm: "1.2rem",
                    md: "clamp(14px, 2.2vw, 22px)",
                  },
                  minWidth: { xs: "35%", sm: "30%", md: "26%" },
                  color: "#fff",
                }}
              >
                {ev.label}
              </Typography>
            </FadeInSection>
          </Box>
        ))}
        {/* </FadeInSection> */}
      </Box>

      {/* ── Right: photo ── */}
      <Box
        sx={{
          flex: "0 0 43%",
          minHeight: { xs: 140, sm: 220, md: "auto" },
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
