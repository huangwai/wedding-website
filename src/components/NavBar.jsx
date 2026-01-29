import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const navItems = [
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
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        {navItems.map((item) => (
          <Button key={item.id} onClick={() => scrollToSection(item.id)}>
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
