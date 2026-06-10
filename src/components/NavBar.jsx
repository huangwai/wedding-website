import {
  AppBar,
  Toolbar,
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
import { useNavigate, useLocation } from "react-router-dom"; // 👈 add these
import { navSections } from "../assets/textList";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // 👈
  const location = useLocation(); // 👈 know which page we're on

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setOpen(false);
  };

  const handleNavClick = (id) => {
    if (id === "gallery") {
      // Navigate to gallery page
      navigate("/gallery");
      setOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      // If on gallery page and clicking a home section, go home first then scroll
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300); // slight delay lets the page mount before scrolling
      setOpen(false);
      return;
    }

    scrollTo(id);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          // backgroundColor: "transparent",
          backgroundColor: scrolled ? "#3b1717" : "transparent",
          backdropFilter: scrolled ? "blur(6px)" : "none",
          transition: "background-color 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 72, md: 96 },
            px: { xs: 2, md: 4 },
            pt: { xs: 0.5, md: 1.5 },
            pb: { xs: 0.5, md: 1.5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{ color: "#f2efe8", position: "absolute", right: 16, top: 16 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List
          sx={{
            width: 250,
            color: "#421603",
          }}
        >
          {navSections.map(({ label, id }) => (
            <ListItemButton key={id} onClick={() => handleNavClick(id)}>
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
