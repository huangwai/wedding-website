import { registry } from "../../assets/textList";
import { Box, Typography, Link } from "@mui/material";

const SERIF = "'Palatino Linotype', 'Book Antiqua', Palatino, serif";

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
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        // width: "100%",
        mx: "auto",
        maxWidth: "100%",
        // height: "100%",
        // aspectRatio: { md: "16 / 9" },
        backgroundColor: bgColor,
        overflow: "hidden",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      {/* ── Background floral image — sits behind everything ── */}
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
          flex: { md: "0 0 46%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 4, md: "8%" },
          py: { xs: 5, md: "6%" },
          position: "relative",
          zIndex: 1,
          minHeight: { xs: 220, md: "auto" },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              // fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: { xs: "3.2rem", md: "5.2rem" },
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
                xs: "1.1rem",
                sm: "1.4rem",
                md: "clamp(14px, 2.4vw, 28px)",
              },
              fontWeight: 400,
              letterSpacing: "0.4em",
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
          flex: { md: "0 0 54%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 3, sm: 4, md: "4%" },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            p: { xs: 3, sm: 4, md: "6% 8%" },
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
                xs: "1.1rem",
                sm: "1.3rem",
                md: "clamp(15px, 2vw, 26px)",
              },
              color: textColor,
              mb: { xs: 2, md: 3 },
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
                xs: "0.85rem",
                sm: "0.95rem",
                md: "clamp(12px, 1.4vw, 18px)",
              },
              color: textColor,
              lineHeight: 1.8,
              mb: { xs: 2, md: 3 },
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
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "clamp(13px, 1.8vw, 22px)",
                },
                color: textColor,
                mt: i === 0 ? 0 : 1,
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

// export default function Registry() {
//   return (
//     <Box
//       id="registry"
//       sx={{
//         py: { xs: 12, md: 18 },
//         px: { xs: 2, sm: 4 },
//         bgcolor: "#f2efe8",
//         color: "#421603",
//       }}
//     >
//       <Container maxWidth="sm" textAlign="center">
//         <Typography
//           textAlign="center"
//           variant="h2"
//           gutterBottom
//           // sx={{ fontSize: { xs: "1.8rem", sm: "2.4rem" } }}
//         >
//           Registry
//         </Typography>

//         <Typography sx={{ mb: 4 }}>
//           Your presence is the greatest gift, but if you wish to give, we are
//           registered at:
//         </Typography>

//         <Stack spacing={2} sx={{ color: "#421603" }}>
//           {registry.map((item, index) => (
//             <Button
//               sx={{ borderColor: "#421603", color: "#421603" }}
//               variant="outlined"
//               href={item.link}
//               target="_blank"
//             >
//               {item.name}
//             </Button>
//           ))}
//         </Stack>
//       </Container>
//     </Box>
//   );
// }
