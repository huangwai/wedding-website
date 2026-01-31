import { Box, Typography, Container, Grid } from "@mui/material";

export default function Details() {
  return (
    <Box id="details" sx={{ py: { xs: 8, sm: 10 }, bgcolor: "#f2efe8" }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
          // sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" } }}
          sx={{ color: "#421603" }}
        >
          Wedding Details
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography fontWeight={600}>Ceremony</Typography>
            <Typography>
              June 12, 2026
              <br />
              4:30 PM
              <br />
              Stone Tower Winery
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography fontWeight={600}>Reception</Typography>
            <Typography>
              Immediately following
              <br />
              Dinner & dancing to follow
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
