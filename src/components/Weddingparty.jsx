import { Box, Typography, Container, Grid, Avatar } from "@mui/material";

//You can later replace Avatar with photos.
const party = [
  {
    name: "Mi-Eh Moon",
    role: "Bridesmaid",
    Description: "Test",
    img: "../assets/Photos/headshots/POG05338.jpg",
  },
  {
    name: "Mi-Jin Ryu",
    role: "Bridesmaid",
    Description: "Test",
    img: "",
  },
  { name: "Jamie Jeong", role: "Bridesmaid", Description: "Test", img: "" },
  { name: "Judy Yoo", role: "Bridesmaid", Description: "Test", img: "" },
  { name: "Jessey Huynh", role: "Groomsman", Description: "Test", img: "" },
  { name: "David Huynh", role: "Groomsman", Description: "Test", img: "" },
  { name: "Ronit Bhansali", role: "Groomsman", Description: "Test", img: "" },
  { name: "Ishaan Gupta", role: "Groomsman", Description: "Test", img: "" },
];

export default function WeddingParty() {
  return (
    <Box id="party" sx={{ py: { xs: 8, sm: 10 }, bgcolor: "#421603" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
          sx={{ color: "#f2efe8" }}
        >
          Wedding Party
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {party.map(({ name, role, img }) => (
            <Grid item xs={6} sm={4} md={3} key={name} textAlign="center">
              <Avatar
                src={img}
                alt={name}
                sx={{
                  width: { xs: 80, sm: 110 },
                  height: { xs: 80, sm: 110 },
                  mx: "auto",
                  mb: 2,
                }}
              />

              <Typography color="#f2efe8" fontWeight={600}>
                {name}
              </Typography>

              <Typography variant="body2" color="#f2efe8">
                {role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
