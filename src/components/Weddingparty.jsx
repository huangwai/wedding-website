import { Box, Typography, Container, Grid, Avatar } from "@mui/material";

//You can later replace Avatar with photos.
const party = [
  { name: "Sam Lee", role: "Best Man" },
  { name: "Jordan Kim", role: "Maid of Honor" },
  { name: "Taylor Nguyen", role: "Bridesmaid" },
  { name: "Chris Patel", role: "Groomsman" },
];

export default function WeddingParty() {
  return (
    <Box id="party" sx={{ py: 10, bgcolor: "#faf7f2" }}>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom textAlign="center">
          Wedding Party
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {party.map((person) => (
            <Grid item xs={6} sm={3} key={person.name} textAlign="center">
              <Avatar sx={{ width: 96, height: 96, mx: "auto", mb: 2 }} />
              <Typography fontWeight={600}>{person.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {person.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
