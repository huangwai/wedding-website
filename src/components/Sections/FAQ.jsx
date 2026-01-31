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

export default function FAQ() {
  return (
    <Box
      id="faq"
      sx={{ py: { xs: 8, sm: 10 }, bgcolor: "#f2efe8", color: "#421603" }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          gutterBottom
          textAlign="center"
          // sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
        >
          Frequently Asked Questions
        </Typography>

        {faqSection.map((faq, index) => (
          <Accordion
            key={index}
            sx={{ mb: 1, color: "#421603", backgroundColor: "#e8e2d4" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                fontWeight={600}
                sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: { xs: "0.9rem", sm: "0.95rem" } }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
