import {
  Box,
  Typography,
  Container,
  Modal,
  IconButton,
  Fade,
  Backdrop,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { gallaryImages } from "../../assets/textList";
import { ThemeProvider, CssBaseline } from "@mui/material";
import FadeInSection from "../FadeInSection";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const handleOpen = (img) => {
    setActiveImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveImage("");
  };

  return (
    <Box
      id="gallery"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 4 },
        bgcolor: "#3b1717",
        color: "#f2efe8",
      }}
    >
      <Container maxWidth="lg">
        <FadeInSection direction="down" delay={300}>
          <Typography
            variant="h2"
            gutterBottom
            textAlign="center"
            sx={{
              mb: 2,
              mt: 2,
              fontSize: { xs: "2.0rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Gallery
          </Typography>
        </FadeInSection>

        {/* Masonry */}
        <FadeInSection direction="up" delay={300}>
          <Masonry
            columns={{ xs: 3, sm: 3, md: 3 }}
            spacing={{ xs: 1.5, sm: 2, md: 3 }}
          >
            {gallaryImages.map((img, index) => (
              <Fade in timeout={1000} key={index}>
                <Box
                  component="img"
                  // src={`${img}?w=800&auto=format`}
                  src={img}
                  alt="Wedding"
                  loading="lazy"
                  onClick={() => handleOpen(img)}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    objectFit: "cover",
                    cursor: "pointer",
                    aspectRatio: { xs: "4/3", sm: "4/3", md: "3/4" }, // responsive aspect ratio
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",

                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                    },
                  }}
                />
              </Fade>
            ))}
          </Masonry>
        </FadeInSection>
      </Container>

      {/* Lightbox */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: { timeout: 400, sx: { bgcolor: "rgba(0,0,0,0.85)" } },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              outline: "none",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: -48, right: -48, color: "#fff" }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>

            <Box
              component="img"
              src={`${activeImage}?w=1600&auto=format`}
              alt="Wedding enlarged"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                borderRadius: 2,
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
