import { Box, Typography, Container, Stack, Link } from "@mui/material";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: { xs: 8, sm: 10 } }}>
      <Container maxWidth="sm" textAlign="center">
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" } }}
        >
          Contact Us
        </Typography>

        <Typography sx={{ mb: 3 }}>Questions? Reach out anytime.</Typography>

        <Stack spacing={1}>
          <Link href="mailto:mijuhhan@gmail.com">mijuhhan@gmail.com</Link>
          <Typography variant="body2">
            Please allow 24–48 hours for a response
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
