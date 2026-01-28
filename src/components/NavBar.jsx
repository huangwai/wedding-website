import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
  ["Home", "/"],
  ["RSVP", "/rsvp"],
  ["Details", "/details"],
  ["Wedding Party", "/party"],
  ["Travel", "/travel"],
  ["FAQ", "/faq"],
  ["Registry", "/registry"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi-Ju & Jimmy
        </Typography>
        {pages.map(([label, path]) => (
          <Button key={path} color="inherit" component={Link} to={path}>
            {label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
