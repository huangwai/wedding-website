import { Box, Typography, Container, Grid, Avatar } from "@mui/material";
import { weddingParty } from "../../assets/textList";

export default function WeddingParty() {
  return (
    <Box
      id="party"
      sx={{ py: { xs: 12, md: 18 }, px: { xs: 2, sm: 4 }, bgcolor: "#3b1717" }}
    >
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
                  width: { xs: 90, sm: 200 },
                  height: { xs: 90, sm: 200 },
                  mx: "auto",
                  mb: 2,
                }}
              />

              <Typography variant="h3" color="#f2efe8" fontWeight={600}>
                {name}
              </Typography>

              <Typography variant="h6" color="#f2efe8">
                {role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
