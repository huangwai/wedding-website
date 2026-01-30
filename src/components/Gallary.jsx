import { Box, Typography, Container, Grid } from "@mui/material";

//Replace image URLs with your engagement photos later.
const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
  "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
];

export default function Gallery() {
  return (
    <Box id="gallery" sx={{ py: { xs: 8, sm: 10 }, bgcolor: "#faf7f2" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" } }}
        >
          Gallery
        </Typography>

        <Typography
          // variant="h4"
          gutterBottom
          textAlign="center"
          // sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" } }}
        >
          Coming Soon!
        </Typography>

        {/* <Grid container spacing={2}>
          {images.map((img, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                component="img"
                src={`${img}?w=600&auto=format`}
                alt="Wedding"
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </Box>
  );
}
