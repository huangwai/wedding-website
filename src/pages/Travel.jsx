import { Container, Typography } from "@mui/material";

export default function Travel() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4">Travel & Lodging</Typography>
      <Typography>
        Nearest Airport: SFO
        <br />
        Recommended Hotels coming soon.
      </Typography>
    </Container>
  );
}
