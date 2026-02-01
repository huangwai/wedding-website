import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

import { hotels, airports } from "../../assets/textList";
import { cardSx } from "../CardSx";
export default function Travel() {
  return (
    <Box
      id="travel"
      sx={{
        py: { xs: 14, md: 22 },
        px: { xs: 2, sm: 4 },
        bgcolor: "#f2efe8",
        color: "#421603",
      }}
    >
      <Container maxWidth="md">
        <Typography
          textAlign="center"
          variant="h2"
          // textAlign="center"
          gutterBottom
        >
          Travel & Stay
        </Typography>

        <Divider sx={{ my: 3, borderColor: "#ccc" }} />

        {/* Hotels */}
        <Typography textAlign="center" variant="h3" gutterBottom>
          Hotels
        </Typography>

        <Grid justifyContent="center" container spacing={3} mb={5}>
          {hotels.map((hotel, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={0} sx={cardSx}>
                <CardContent sx={{ textAlign: "center", py: 3 }}>
                  <Typography fontWeight={600} fontSize="1.05rem">
                    {hotel.name}
                  </Typography>
                  <Typography variant="body2" sx={{ my: 1.5, opacity: 0.85 }}>
                    {hotel.address}
                  </Typography>

                  <Typography variant="body2" sx={{ my: 1.5, opacity: 0.85 }}>
                    {hotel.details}
                  </Typography>

                  {hotel.link && (
                    <Link
                      href={hotel.link}
                      underline="hover"
                      sx={{ fontWeight: 500, color: "#421603" }}
                    >
                      Book here
                    </Link>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Airports */}
        <Typography variant="h3" textAlign="center" gutterBottom>
          Nearby Airports
        </Typography>

        <Grid justifyContent="center" container spacing={3}>
          {airports.map((airport, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={0} sx={cardSx}>
                <CardContent sx={{ textAlign: "center", py: 3 }}>
                  <Typography fontWeight={600} fontSize="1.05rem">
                    {airport.name}
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    {airport.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
