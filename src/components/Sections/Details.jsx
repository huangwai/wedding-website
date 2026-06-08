import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Link,
} from "@mui/material";
import { details } from "../../assets/textList";

export default function Details() {
  return (
    <Box
      id="details"
      sx={{
        py: { xs: 4, sm: 8, md: 16 },
        px: { xs: 1.5, sm: 3, md: 6 },
        backgroundColor: "#e8e2d4",
        color: "#421603",
        mx: "auto",
        maxWidth: "100%",
      }}
    >
      <Box sx={{ textAlign: "center", mb: { xs: 3, md: 6 } }}>
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

      {/* Always side-by-side */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: 1.5, sm: 2, md: 4 },
          mx: "auto",
        }}
      >
        {details.map((item, index) => (
          <Card
            key={index}
            elevation={3}
            sx={{
              backgroundColor: "#f2efe8",
              flex: "1 1 0",
              minWidth: 0, // prevents flex children from overflowing
              py: 1,
              px: { xs: 1, sm: 2, md: 5 },
            }}
          >
            <CardContent
              sx={{
                textAlign: "center",
                color: "#421603",
                px: { xs: 0.5, sm: 1 },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "2.5rem" },
                  fontWeight: "light",
                  mt: 1,
                  mb: { xs: 1, md: 3 },
                }}
              >
                {item.type}
              </Typography>

              <Typography
                sx={{
                  color: "#656440",
                  mb: 1,
                  fontSize: { xs: "0.65rem", sm: "0.85rem", md: "1rem" },
                }}
              >
                JOIN US AT
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.75rem", sm: "1rem", md: "1.6rem" },
                  mb: 1,
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
                sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" } }}
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
                  maxHeight: { xs: "20vh", sm: "28vh", md: "38vh" },
                  maxWidth: "90%",
                  mt: { xs: 1.5, md: 2 },
                  mb: { xs: -1, md: -3 },
                  mx: "auto",
                }}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
