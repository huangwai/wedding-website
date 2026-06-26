import { Box, Typography } from "@mui/material";
import { timelineItemsV2 } from "../../assets/textList";
import FadeInSection from "../FadeInSection";

export default function TimeLineV2() {
  return (
    <Box
      id="timeline"
      sx={{
        backgroundColor: "#656440",
        color: "#F5F0E8",
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        textAlign: "center",
      }}
    >
      {/* Header */}
      <Box sx={{ mb: { xs: 6, md: 8 } }}>
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
            The
          </Typography>
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
            PROGRAM
          </Typography>
        </FadeInSection>
      </Box>
      {/* Three columns */}
      <FadeInSection direction="up" delay={300}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // always row
            justifyContent: "center",
            gap: { xs: 2, md: 4 },
          }}
        >
          {timelineItemsV2.map((section) => (
            <Box key={section.id} sx={{ flex: 1 }}>
              {" "}
              {/* remove maxWidth so they share space equally */}
              <Typography
                component="span"
                sx={{
                  justifyContent: "space-around",
                  display: "flex",
                  fontWeight: 1000,
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
                  whiteSpace: "nowrap",
                }}
              >
                {section.title}
              </Typography>
              <Typography
                component="span"
                // variant="body"
                sx={{
                  fontSize: {
                    xs: "0.85rem",
                    sm: "1.2rem",
                    md: "clamp(14px, 2.2vw, 22px)",
                  },
                  mb: 2,
                  textAlign: "right",
                  minWidth: { xs: "35%", sm: "30%", md: "26%" },
                  flexShrink: 0,
                  color: "#fff",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {section.time}
              </Typography>
              <Typography
                sx={{
                  // fontFamily: "serif",
                  fontSize: {
                    xs: "0.85rem",
                    sm: "1.2rem",
                    md: "clamp(14px, 2.2vw, 22px)",
                  },
                  lineHeight: 1.7,
                }}
              >
                {section.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </FadeInSection>
    </Box>
  );
}
