import { Box, Typography, Container, Fade, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import FadeInSection from "../FadeInSection";
import rsvpBg from "/Photos/Engagement/engagement005.jpeg"; // adjust path/filename to your actual image

export default function RSVP() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      id="rsvp"
      gutterBottom
      textAlign="center"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 4 },
        color: "#f2efe8",
        height: { xs: "40vh", md: "50vh" },
        position: "relative",
        backgroundImage: `url(${rsvpBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(66, 22, 3, 0.55)", // dark overlay for text contrast, tweak alpha as needed
        },
      }}
    >
      <Container maxWidth="md" sx={{ mt: 2, position: "relative", zIndex: 1 }}>
        <FadeInSection direction="down" delay={300}>
          <Typography
            variant="h2"
            sx={{
              mb: -2,
              mt: 2,
            }}
          >
            RSVP
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ mt: 4, mb: 4 }}>
            Please reply by August 30, 2026 {""}
          </Typography>
          <Link
            color="#f2efe8"
            href="https://withjoy.com/jimmy-and-mi-ju/rsvp"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: 500 }}
          >
            Click here to RSVP
          </Link>
        </FadeInSection>
      </Container>
    </Box>
  );
}
