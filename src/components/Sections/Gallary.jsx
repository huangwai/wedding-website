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
        py: { xs: 12, md: 18 },
        px: { xs: 2, sm: 4 },
        bgcolor: "#3b1717",
        color: "#f2efe8",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom>
          Gallery
        </Typography>

        {/* <Typography textAlign="center" sx={{ mb: 6 }}>
          Coming Soon!
        </Typography> */}

        {/* Masonry */}
        <Masonry columns={{ xs: 1, sm: 1, md: 3 }} spacing={3}>
          {gallaryImages.map((img, index) => (
            <Fade in timeout={800} key={index}>
              <Box
                component="img"
                src={`${img}?w=800&auto=format`}
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
