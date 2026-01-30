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
          // backgroundColor: scrolled ? "#421603" : "transparent",
          backgroundColor: scrolled ? "#421603CC" : "transparent",
          backdropFilter: scrolled ? "blur(6px)" : "none",
          boxShadow: "none",
          transition: "background-color 0.3s ease",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img
            src={logo}
            alt="App Logo"
            height="50"
            style={{ cursor: "pointer" }}
            onClick={() => scrollTo("home")}
          />

          {!isMobile ? (
            <Stack direction="row" spacing={2}>
              {sections.map(({ label, id }) => (
                <Button
                  key={id}
                  color="inherit"
                  onClick={() => scrollTo(id)}
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          ) : (
            <IconButton sx={{ color: "#fff" }} onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
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
