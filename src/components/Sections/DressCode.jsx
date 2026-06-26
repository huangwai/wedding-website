import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqSection } from "../../assets/textList";
import FadeInSection from "../FadeInSection";

export default function DressCode() {
  return (
    <Box
      id="dresscode"
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
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <FadeInSection direction="down" delay={300}>
          <Typography
            variant="h2"
            // gutterBottom
            textAlign="center"
            sx={{
              fontSize: { xs: "2.8rem", sm: "3.0rem", md: "3.8rem" },
              mb: -3,
            }}
          >
            The
          </Typography>
          <Typography
            textAlign="center"
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", sm: "3rem", md: "3.8rem" },
              fontFamily: "Cormorant Garamond, serif",
              mb: 2,
            }}
          >
            Dress Code
          </Typography>
        </FadeInSection>

        <FadeInSection direction="right" delay={300}>
          <Typography
            textAlign="center"
            variant="body1"
            sx={{ fontFamily: "Cormorant Garamond, serif", mb: 2 }}
          >
            We would love to see our guests dressed to the nines for our big
            day! While optional, we invite you to match our fall wedding color
            palette. See ideas here.
          </Typography>
        </FadeInSection>

        <FadeInSection direction="left" delay={300}>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ fontFamily: "Cormorant Garamond, serif", mb: 2 }}
          >
            Our dress code is cocktail attire. Ladies are free to wear
            floor-length, tea-length, midi dresses, pantsuits, etc. Gentlemen
            can wear suits (tie optional).
          </Typography>
        </FadeInSection>
        <FadeInSection direction="up" delay={300}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { xs: 1.5, sm: 2, md: 3 },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {["#421603", "#64001b", "#656440", "#a6a88d"].map((color) => (
              <Box
                key={color}
                sx={{
                  width: { xs: 40, sm: 60, md: 80 },
                  height: { xs: 40, sm: 60, md: 80 },
                  borderRadius: "50%",
                  backgroundColor: color,
                }}
              />
            ))}
          </Box>
        </FadeInSection>
      </Container>
    </Box>
  );
}
