import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Link,
} from "@mui/material";
import { details } from "../../assets/textList";
import FadeInSection from "../FadeInSection";

export default function Details() {
  return (
    // <FadeInSection>
    <Box
      id="details"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 3, md: 5 },
        backgroundColor: "#e8e2d4",
        color: "#421603",
        mx: "auto",
        maxWidth: "100%",
        // mt: 1,
        // maxHeight: { xs: "45vh", md: "65vh" },
      }}
    >
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4, md: 6 } }}>
        <FadeInSection direction="down" delay={300}>
          <Typography
            variant="h2"
            sx={{
              mb: -2,
              mt: 2,
              fontSize: { xs: "2.2rem", sm: "2.7rem", md: "3.2rem" },
            }}
          >
            The
          </Typography>
        </FadeInSection>
        <FadeInSection direction="down" delay={300}>
          <Typography
            variant="h2"
            sx={{
              mb: -1,
              fontFamily: "Cormorant Garamond, serif",
              fontSize: { xs: "2.0rem", sm: "2.5rem", md: "3rem" },
              fontWeight: "none",
            }}
          >
            WEDDING
          </Typography>
        </FadeInSection>
      </Box>

      {/* Always side-by-side */}
      <FadeInSection direction="up" delay={300}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: 2, sm: 3, md: 5 },
            mx: "auto",
            maxWidth: { xs: "85%", sm: "75%", md: "65%" },
          }}
        >
          {/* <FadeInSection direction="up"> */}
          {details.map((item, index) => (
            // <FadeInSection key={index} direction="up">
            <Card
              key={index}
              elevation={3}
              sx={{
                backgroundColor: "#f2efe8",
                flex: "1 1 0",
                minWidth: 0,
                aspectRatio: "1 / 1",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                border: ".5px solid #421603",
                mb: 2,
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  color: "#421603",
                  px: { xs: 0.5, sm: 1, md: 2 },
                  py: { xs: 0.5, sm: 1, md: 2 },
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: { xs: 0.5, sm: 0.75, md: 1.5 },
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1.2rem", md: "2rem" },
                    fontWeight: "light",
                    fontWeight: 500,
                    mt: 2,
                  }}
                >
                  {item.type}
                </Typography>

                <Typography
                  sx={{
                    color: "#656440",
                    fontSize: { xs: "0.45rem", sm: "0.65rem", md: "0.85rem" },
                  }}
                >
                  JOIN US AT
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.7rem", sm: "1.0rem", md: "1.75rem" },
                  }}
                >
                  {item.name}
                </Typography>

                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="inherit"
                  sx={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: { xs: "0.6rem", sm: "0.85rem", md: "1.0rem" },
                  }}
                >
                  {item.addressLine1}
                  <br />
                  {item.addressLine2}
                </Link>

                <CardMedia
                  component="img"
                  alt="Image of Venue"
                  image={item.image}
                  sx={{
                    width: "100%",
                    mx: "auto",
                    // height: "50",
                    objectFit: "contain",
                    objectPosition: "center",
                    borderRadius: 1,
                    flex: 1,
                    minHeight: 0.25,
                  }}
                />
              </CardContent>
            </Card>

            // </FadeInSection>
          ))}
          {/* </FadeInSection> */}
        </Box>
      </FadeInSection>
    </Box>
    // </FadeInSection>
  );
}
