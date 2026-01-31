import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import logo from "../../public/MJLogoV2.png";
import { navSections } from "../assets/textList";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  // OPTIONAL: detect scroll
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "#421603CC" : "transparent",
          backdropFilter: scrolled ? "blur(6px)" : "none",
          transition: "background-color 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 72, md: 96 },
            px: { xs: 2, md: 4 },
            pt: { xs: 1, md: 2 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* LOGO (CENTERED) */}
          <img
            src={logo}
            alt="App Logo"
            height="60"
            style={{ cursor: "pointer", marginBottom: 8 }}
            onClick={() => scrollTo("home")}
          />

          {/* DESKTOP NAV */}
          {!isMobile ? (
            <Stack
              direction="row"
              spacing={{ lg: 3, xl: 4 }}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            >
              {navSections.map(({ label, id }) => (
                <Button
                  key={id}
                  onClick={() => scrollTo(id)}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    color: "#f2efe8",
                    fontSize: {
                      lg: "1rem",
                      xl: "1.25rem",
                    },
                    fontFamily: "Cormorant  Garamond, serif",
                    px: { lg: 1.5, xl: 2 },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          ) : (
            <IconButton
              sx={{
                color: "#f2efe8",
                position: "absolute",
                right: 16,
                top: 16,
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        // sx={{ color: "red" }}
        onClose={() => setOpen(false)}
      >
        <List sx={{ width: 250, color: "#421603" }}>
          {navSections.map(({ label, id }) => (
            <ListItemButton key={id} onClick={() => scrollTo(id)}>
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
