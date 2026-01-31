import { Box, Typography, Container, Grid, Avatar } from "@mui/material";
import { weddingParty } from "../../assets/textList";

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
          {weddingParty.map(({ name, role, img }) => (
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
