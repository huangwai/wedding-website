import { Container, Typography, Link } from "@mui/material";

export default function Registry() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4">Gift Registry</Typography>
      <Link href="https://withjoy.com" target="_blank">
        View Our Registry
      </Link>
    </Container>
  );
}
