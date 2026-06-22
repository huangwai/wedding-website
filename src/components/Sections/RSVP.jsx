import { Box, Typography, Container, Fade } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import FadeInSection from "../FadeInSection";

export default function RSVP() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      id="rsvp"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 4 },
        bgcolor: "#f2efe8",
        color: "#421603",
        height: { xs: "55vh", md: "75vh" },
      }}
    >
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <FadeInSection direction="down" delay={300}>
          <Typography
            variant="h2"
            gutterBottom
            textAlign="center"
            sx={{ mb: -1 }}
          >
            RSVP
          </Typography>
        </FadeInSection>
        <FadeInSection direction="down">
          <Typography
            textAlign="center"
            sx={{ fontFamily: "Cormorant Garamond, serif", mb: 2 }}
          >
            Please respond by August 15, 2026
          </Typography>
        </FadeInSection>

        <FadeInSection direction="up" delay={300}>
          <Box
            sx={{
              maxWidth: "100%",
              // height: { xs: "600px", sm: "700px", md: "800px" },
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 2,
              height: { xs: "35vh", md: "50vh" },
            }}
          >
            {/* <FadeInSection direction="up"> */}
            <iframe
              src="https://withjoy.com/jimmy-and-mi-ju/rsvp"
              width="100%"
              height="100%"
              style={{
                border: "none",
                transform: isMobile ? "scale(0.75)" : "scale(0.95)", // 👈 larger scale
                transformOrigin: "top left",
                width: isMobile ? "133%" : "105%", // 👈 1/scale to fill width
                height: isMobile ? "133%" : "105%", // 👈 1/scale to fill height
              }}
              title="Wedding RSVP"
            />
            {/* </FadeInSection> */}
          </Box>
        </FadeInSection>
      </Container>
    </Box>
  );
}
