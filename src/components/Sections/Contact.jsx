import { Box, Typography, Container, Stack, Link } from "@mui/material";

export default function Contact() {
  return (
    <Box
      textAlign="center"
      id="contact"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 4 },
        bgcolor: "#f2efe8",
        color: "#421603",
        height: { xs: "25vh", md: "auto" },
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm" textAlign="center">
        <Typography
          variant="h2"
          gutterBottom
          // sx={{}}
          // sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" } }}
        >
          Contact Us
        </Typography>

        <Typography
          sx={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            // mb: 4,
          }}
        >
          Questions? Reach out anytime.
        </Typography>

        <Stack spacing={1}>
          <Link
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: { xs: "0.9rem", sm: "1.1rem" },
            }}
            color="#421603"
            href="mailto:mijuhhan@gmail.com"
          >
            mijuhhan@gmail.com
          </Link>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
            }}
          >
            Please allow 24–48 hours for a response
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
