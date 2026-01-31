import { Box, Typography, Container, Grid, Link } from "@mui/material";

export default function Travel() {
  return (
    <Box id="travel" sx={{ py: { xs: 8, sm: 10 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" } }}
        >
          Travel & Stay
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography fontWeight={600}>Hotel Block</Typography>
            <Typography>
              Hilton Garden Inn Leesburg
              <br />
              Group rate available
            </Typography>
            <Link href="#" underline="hover">
              Book here
            </Link>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography fontWeight={600}>Transportation</Typography>
            <Typography>
              Complimentary shuttles will be provided from the hotel to the
              venue.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
