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

export default function FAQ() {
  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 4 },
        bgcolor: "#f2efe8",
        color: "#421603",
        height: { xs: "auto", md: "auto" },
      }}
    >
      <Container maxWidth="md" sx={{ mb: 2, mt: 2 }}>
        <FadeInSection direction="down" delay={300}>
          <Typography
            variant="h2"
            gutterBottom
            textAlign="center"
            sx={{
              mb: 2,
              mt: 2,
            }}
          >
            Frequently Asked Questions
          </Typography>
        </FadeInSection>

        <FadeInSection direction="up" delay={300}>
          {faqSection.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 1,
                color: "#421603",
                backgroundColor: "#e8e2d4",
                // border: ".5px solid #cbb595",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  fontWeight={500}
                  variant="h5"
                  // sx={{
                  //   fontSize: { xs: "0.95rem", sm: "1rem", md: "1.25rem" },
                  // }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: "pre-line",
                    // fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1.0rem" },
                  }}
                >
                  {faq.ceremonyLink ? (
                    <>
                      {
                        "Ceremony: Parking is free! The main lot for Glenview Mansion is on the left as you enter Rockville Civic Center Park off Edmonston Drive (603 Edmonston Drive, Rockville, MD 20851) "
                      }
                      <a
                        href={faq.ceremonyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#421603", fontWeight: 600 }}
                      >
                        Click here for parking details
                      </a>

                      {
                        " \n\n Reception: Terra Gaucha offers free underground parking for the first 2 hours. The parking garage entrance is on Festival Street — just off Rockville Pike at Twinbrook Quarter. Note that finding the restaurant from the garage can be a little tricky, so give yourself a few extra minutes once you're parked. "
                      }
                      <a
                        href={faq.receptionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#421603", fontWeight: 600 }}
                      >
                        Click here for parking details
                      </a>
                    </>
                  ) : (
                    faq.answer
                  )}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </FadeInSection>
      </Container>
    </Box>
  );
}
