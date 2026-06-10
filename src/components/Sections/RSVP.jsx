import { Box, Typography, Container } from "@mui/material";

export default function RSVP() {
  return (
    <Box
      id="rsvp"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 4 },
        bgcolor: "#f2efe8",
        color: "#421603",
        height: { xs: "45vh", md: "65vh" },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom textAlign="center">
          RSVP
        </Typography>

        <Typography
          textAlign="center"
          sx={{ fontFamily: "Cormorant Garamond, serif", mb: 2 }}
        >
          Please respond by August 15, 2026
        </Typography>

        <Box
          sx={{
            maxWidth: "100%",
            // height: { xs: "600px", sm: "700px", md: "800px" },
            height: "45vh",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 2,
            height: { xs: "28vh", md: "45vh" },
          }}
        >
          <iframe
            src="https://withjoy.com/jimmy-and-mi-ju/rsvp"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Wedding RSVP"
          />
        </Box>
      </Container>
    </Box>
  );
}
