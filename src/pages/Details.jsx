import { Container, Typography } from "@mui/material";

export default function Details() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Wedding Details
      </Typography>
      <Typography>
        Ceremony: 4:00 PM at The Vineyard Chapel
        <br />
        Reception to follow
      </Typography>
    </Container>
  );
}
