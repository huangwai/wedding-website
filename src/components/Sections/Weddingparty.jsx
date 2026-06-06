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

        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 6 }}
          justifyContent="center"
        >
          {weddingParty.map(({ name, role, img }) => (
            <Grid item xs={6} sm={4} md={3} key={name} textAlign="center">
              <Avatar
                src={img}
                alt={name}
                sx={{
                  width: { xs: 80, sm: 140, md: 180 },
                  height: { xs: 80, sm: 140, md: 180 },
                  mx: "auto",
                  mb: { xs: 1, sm: 1.5, md: 2 },
                }}
              />

              <Typography
                color="#f2efe8"
                fontWeight={600}
                sx={{ fontSize: { xs: "0.85rem", sm: "1.1rem", md: "1.3rem" } }}
              >
                {name}
              </Typography>

              <Typography
                color="#f2efe8"
                sx={{ fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" } }}
              >
                {role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
