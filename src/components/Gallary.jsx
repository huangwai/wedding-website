import {
  Box,
  Typography,
  Container,
  ImageList,
  ImageListItem,
} from "@mui/material";
//Replace image URLs with your engagement photos later.
const images = [
  "https://images.unsplash.com/photo-1529634806980-85c4f69c2a16",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
  "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
];

export default function Gallery() {
  return (
    <Box id="gallery" sx={{ py: 10, bgcolor: "#faf7f2" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom textAlign="center">
          Gallery
        </Typography>

        <ImageList variant="masonry" cols={3} gap={16}>
          {images.map((img) => (
            <ImageListItem key={img}>
              <img
                src={`${img}?w=400&fit=crop&auto=format`}
                alt="Engagement"
                loading="lazy"
                style={{ borderRadius: 12 }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
}
