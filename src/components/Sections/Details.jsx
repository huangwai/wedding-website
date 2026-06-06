import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { details } from "../../assets/textList";
import { cardSx } from "../CardSx";
import { Link } from "@mui/material";
export default function TwoColumnCards() {
  return (
    <Box
      id="details"
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 2, sm: 4 },
        backgroundColor: "#e8e2d4",
        color: "#421603",
        mx: "auto",
        maxWidth: "100%",
      }}
    >
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h2"
          sx={{ mb: -2, fontSize: { xs: "3.2rem", md: "5.2rem" } }}
        >
          The
        </Typography>
        <Typography
          variant="h2"
          sx={{
            mb: -1,
            fontFamily: "Cormorant Garamond, serif",
            fontSize: { xs: "3rem", md: "4rem" },
            fontWeight: "none",
          }}
        >
          WEDDING
        </Typography>
      </Box>

      {/* <Grid container spacing={1} justifyContent="center"> */}
      <Grid container spacing={{ xs: 2, md: 10 }} justifyContent="center">
        {details.map((item, index) => (
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                backgroundColor: "#f2efe8",
                height: "100%",
                py: 1,
                px: 10,
                // maxWidth: "100vw",
              }}
            >
              <CardContent sx={{ textAlign: "center", color: "#421603" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontWeight: "light",
                    mt: 2,
                    mb: 4,
                  }}
                >
                  {item.type}
                </Typography>
                <Typography sx={{ color: "#656440", mb: 2 }}>
                  JOIN US AT
                </Typography>

                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {item.name}
                </Typography>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="inherit"
                >
                  {item.addressLine1}
                  <br />
                  {item.addressLine2}
                </Link>

                <CardMedia
                  component="img"
                  alt="Image of Venue"
                  image={item.image}
                  justifyContent="center"
                  sx={{
                    maxHeight: { xs: "30vh", md: "40vh" },
                    maxWidth: { xs: "90%", md: "75%" },
                    mb: -6,
                    mt: -2,
                    mx: "auto", // 👈 centers the image
                  }}
                ></CardMedia>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
