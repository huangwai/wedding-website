import { Box, Typography, Container, Stack, Link } from "@mui/material";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10 }}>
      <Container maxWidth="sm" textAlign="center">
        <Typography variant="h2" gutterBottom>
          Contact
        </Typography>

        <Typography sx={{ mb: 3 }}>
          Have questions? Feel free to reach out!
        </Typography>

        <Stack spacing={1}>
          <Typography>
            Email:{" "}
            <Link href="mailto:alexandjamie@gmail.com">mijuhhan@gmail.com</Link>
          </Typography>

          {/* <Typography>Phone: (555) 123-4567</Typography> */}
        </Stack>
      </Container>
    </Box>
  );
}
