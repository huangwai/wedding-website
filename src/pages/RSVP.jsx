import { Container, Typography, Box } from "@mui/material";

export default function RSVP() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        RSVP
      </Typography>

      <Typography textAlign="center" sx={{ mb: 4 }}>
        Please let us know if you can celebrate with us!
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: { xs: "1100px", md: "900px" },
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        <iframe
          src="https://withjoy.com/jimmy-and-mi-ju/rsvp"
          title="Wedding RSVP"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          loading="lazy"
        />
      </Box>
    </Container>
  );
}
