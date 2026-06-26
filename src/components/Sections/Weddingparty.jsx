import { Box, Typography, Container, Grid, Avatar } from "@mui/material";
import { weddingParty } from "../../assets/textList";
import FadeInSection from "../FadeInSection";

export default function WeddingParty() {
  return (
    <Box
      id="party"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 4 },
        bgcolor: "#3b1717",
        height: { xs: "auto" },
      }}
    >
      <Container maxWidth="lg">
        <FadeInSection direction="down" delay={300}>
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            sx={{ color: "#f2efe8", mt: 2 }}
          >
            Wedding Party
          </Typography>
        </FadeInSection>
        <FadeInSection direction="up" delay={300}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              mb: 2,
              gap: { xs: 2, sm: 3, md: 2 },
            }}
          >
            {weddingParty.map(({ name, role, img }) => (
              <Box
                key={name}
                textAlign="center"
                sx={{ width: "calc(25% - 24px)" }}
              >
                <Avatar
                  src={img}
                  alt={name}
                  sx={{
                    width: { xs: 60, sm: 120, md: 160 },
                    height: { xs: 60, sm: 120, md: 160 },
                    mx: "auto",
                    mb: { xs: 0.8, sm: 1.2, md: 1.8 },
                  }}
                />
                <Typography
                  color="#f2efe8"
                  fontWeight={600}
                  variant="body1"
                  // sx={{
                  //   fontFamily: "Cormorant Garamond, serif",
                  //   fontSize: { xs: "0.70rem", sm: "1.0rem", md: "1.2rem" },
                  // }}
                >
                  {name}
                </Typography>
                <Typography color="#f2efe8" fontWeight={500} variant="body1">
                  {role}
                </Typography>
              </Box>
            ))}
          </Box>
        </FadeInSection>
      </Container>
    </Box>
  );
}
