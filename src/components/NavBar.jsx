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

const sections = [
  { label: "Home", id: "home" },
  { label: "Details", id: "details" },
  { label: "Wedding Party", id: "party" },
  { label: "Travel", id: "travel" },
  { label: "Registry", id: "registry" },
  { label: "FAQ", id: "faq" },
  { label: "Gallery", id: "gallery" },
  { label: "RSVP", id: "rsvp" },
  { label: "Contact", id: "contact" },
];

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
            minHeight: { xs: 64, md: 72, lg: 80 },
            px: { xs: 2, md: 4 },
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* LOGO */}
          <img
            src={logo}
            alt="App Logo"
            height="48"
            style={{ cursor: "pointer" }}
            onClick={() => scrollTo("home")}
          />

          {/* DESKTOP NAV */}
          {!isMobile ? (
            <Stack
              direction="row"
              spacing={{ lg: 3, xl: 4 }}
              sx={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap", // 👈 prevents stacking
                mt: "4px",
              }}
            >
              {sections.map(({ label, id }) => (
                <Button
                  key={id}
                  onClick={() => scrollTo(id)}
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    whiteSpace: "nowrap", // 👈 keeps text in one line
                    color: "#fff",
                    fontSize: {
                      lg: "1rem",
                      xl: "1.25rem",
                    },
                    px: { lg: 1.5, xl: 2 },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          ) : (
            <IconButton
              sx={{ color: "#fff", ml: "auto" }}
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
          {sections.map(({ label, id }) => (
            <ListItemButton key={id} onClick={() => scrollTo(id)}>
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
