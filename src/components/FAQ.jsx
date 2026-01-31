import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is the dress code?",
    answer:
      "The dress code is semi-formal. Suits, cocktail dresses, or anything you feel great in!",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "If your invitation includes a plus one, they are more than welcome. Please RSVP accordingly.",
  },
  {
    question: "Are kids welcome?",
    answer:
      "While we love your little ones, this will be an adults-only celebration.",
  },
  {
    question: "Is there parking at the venue?",
    answer: "Yes, complimentary parking will be available at the venue.",
  },
  {
    question: "When should I RSVP by?",
    answer: "Please RSVP by May 1, 2026 so we can plan accordingly.",
  },
];

export default function FAQ() {
  return (
    <Box id="faq" sx={{ py: { xs: 8, sm: 10 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          gutterBottom
          textAlign="center"
          // sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" } }}
        >
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
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
