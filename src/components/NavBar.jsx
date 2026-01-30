import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* <Typography fontWeight={600}>A & J</Typography> */}
          <img src="../../public/MJLogoV2.png" alt="App Logo" height="50" />
          {!isMobile ? (
            <Stack direction="row" spacing={2}>
              {sections.map(({ label, id }) => (
                <Button
                  key={id}
                  color="inherit"
                  onClick={() => scrollTo(id)}
                  sx={{ textTransform: "none", fontWeight: 500 }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          ) : (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
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
