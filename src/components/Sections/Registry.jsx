import { registry } from "../../assets/textList";
import { Box, Typography, Link } from "@mui/material";

const Registry = ({
  titleScriptPart = registry[0].titleScriptPart,
  titleSerifPart = registry[0].titleSerifPart,
  heading = registry[0].heading,
  body = registry[0].body,
  links = registry[0].links,
  bgColor = "#e8e0d5",
  textColor = "#3b1f1f",
  floralSrc = "/Photos/backgroundRegistry.png",
}) => {
  return (
    <Box
      id="registry"
      sx={{
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1.5, sm: 3, md: 4 },
        display: "flex",
        flexDirection: "row", // always side-by-side
        mx: "auto",
        maxWidth: "100%",
        backgroundColor: bgColor,
        overflow: "hidden",
        borderRadius: "4px",
        position: "relative",
        height: { xs: "45vh", md: "65vh" },
      }}
    >
      {/* ── Background floral image ── */}
      {floralSrc && (
        <Box
          component="img"
          src={floralSrc}
          alt=""
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "100%",
            width: "100%",
            opacity: 0.45,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      {/* ── Left panel: title ── */}
      <Box
        sx={{
          flex: "0 0 46%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 1, sm: 3, md: "8%" },
          py: { xs: 2, sm: 4, md: "6%" },
          position: "relative",
          zIndex: 1,
          minHeight: { xs: 100, md: "auto" },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontStyle: "italic",
              fontSize: { xs: "2.0rem", sm: "2.8rem", md: "5.2rem" },
              fontWeight: 400,
              lineHeight: 1,
              color: textColor,
            }}
          >
            {titleScriptPart}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "normal",
              fontSize: {
                xs: "1.0rem",
                sm: "1.5rem",
                md: "clamp(14px, 2.4vw, 28px)",
              },
              fontWeight: 400,
              letterSpacing: { xs: "0.15em", sm: "0.3em", md: "0.4em" },
              color: textColor,
              mt: "-6px",
            }}
          >
            {titleSerifPart}
          </Typography>
        </Box>
      </Box>

      {/* ── Right panel: white card ── */}
      <Box
        sx={{
          flex: "0 0 54%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 1.5, sm: 3, md: "4%" },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            p: { xs: 2, sm: 3, md: "6% 8%" },
            width: "100%",
            maxWidth: { md: "540px" },
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 700,
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
                md: "clamp(15px, 2vw, 26px)",
              },
              color: textColor,
              mb: { xs: 1, sm: 2, md: 3 },
              lineHeight: 1.4,
            }}
          >
            {heading}
          </Typography>

          {/* Body */}
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: {
                xs: "0.70rem",
                sm: "0.80rem",
                md: "clamp(12px, 2.0vw, 20px)",
              },
              color: textColor,
              lineHeight: 1.8,
              mb: { xs: 1, sm: 2, md: 3 },
              letterSpacing: "0.02em",
            }}
          >
            {body}
          </Typography>

          {/* Links */}
          {links.map((link, i) => (
            <Typography
              key={i}
              sx={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 700,
                fontSize: {
                  xs: "0.65rem",
                  sm: "0.95rem",
                  md: "clamp(13px, 1.8vw, 22px)",
                },
                color: textColor,
                mt: i === 0 ? 0 : { xs: 0.5, md: 1 },
              }}
            >
              <Link
                href={link.url}
                underline="hover"
                sx={{
                  color: "inherit",
                  fontFamily: "Cormorant Garamond, serif",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Link>
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Registry;
