import { Box, Typography, Container } from "@mui/material";

export default function RSVP() {
  return (
    <Box
      id="rsvp"
      sx={{ py: { xs: 8, sm: 12 }, bgcolor: "#f2efe8", color: "#421603" }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom textAlign="center">
          RSVP
        </Typography>

        <Typography textAlign="center" sx={{ mb: 4 }}>
          Please respond by May 1, 2026
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: { xs: "600px", sm: "700px", md: "800px" },
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 2,
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
