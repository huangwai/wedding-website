import { Box, Typography, Container, Stack, Button } from "@mui/material";
import { registry } from "../../assets/textList";

export default function Registry() {
  return (
    <Box
      id="registry"
      sx={{
        py: { xs: 12, md: 18 },
        px: { xs: 2, sm: 4 },
        bgcolor: "#f2efe8",
        color: "#421603",
      }}
    >
      <Container maxWidth="sm" textAlign="center">
        <Typography
          textAlign="center"
          variant="h2"
          gutterBottom
          // sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" } }}
        >
          Registry
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Your presence is the greatest gift, but if you wish to give, we are
          registered at:
        </Typography>

        <Stack spacing={2} sx={{ color: "#421603" }}>
          {registry.map((item, index) => (
            <Button
              sx={{ borderColor: "#421603", color: "#421603" }}
              variant="outlined"
              href={item.link}
              target="_blank"
            >
              {item.name}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
