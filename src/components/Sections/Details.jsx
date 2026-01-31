import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

const mapStyle = {
  width: "100%",
  height: "280px",
  border: 0,
  borderRadius: "12px",
};

export default function WeddingDetails() {
  return (
    <Box
      id="details"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
        backgroundColor: "#f2efe8",
        color: "#421603",
      }}
    >
      {/* INNER CENTERED CONTAINER */}
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* TITLE */}
        <Typography variant="h2" align="center" sx={{ mb: { xs: 8, md: 12 } }}>
          Wedding Details
        </Typography>

        {/* ================= CEREMONY ================= */}
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: { xs: 10, md: 14 } }}
        >
          {/* IMAGES – LEFT */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "grid", gap: 2 }}>
              <Card elevation={3} sx={{ borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  image="/Photos/Ceremony/glenviewImg02.jpg"
                  alt="Ceremony Front view"
                  sx={{ height: 220 }}
                />
              </Card>

              <Card elevation={3} sx={{ borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  image="/Photos/Ceremony/glenviewImg01.jpeg"
                  alt="Ceremony venue"
                  sx={{ height: 220 }}
                />
              </Card>
            </Box>
          </Grid>

          {/* DETAILS – RIGHT */}
          <Grid item xs={12} md={7}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Ceremony
            </Typography>

            <Typography sx={{ mb: 1 }}>October 5, 2026 • 4:00 PM</Typography>

            <Typography>
              Glenview Mansion at Rockville Civic Center Park
            </Typography>

            <Typography sx={{ mb: 4 }}>
              603 Edmonston Dr
              <br />
              Rockville, MD 20851
            </Typography>

            <iframe
              title="Ceremony"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6193.749672045485!2d-77.13186152309584!3d39.08654863551973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cd94682e1e19%3A0xb04a8627ca8abd97!2sGlenview%20Mansion!5e0!3m2!1sen!2sus!4v1769873160549!5m2!1sen!2sus"
              style={mapStyle}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Grid>
        </Grid>

        {/* ================= RECEPTION ================= */}
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
        >
          {/* IMAGES – RIGHT ON DESKTOP */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Box sx={{ display: "grid", gap: 2 }}>
              <Card elevation={3} sx={{ borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  image="/images/reception-1.jpg"
                  alt="Reception venue"
                  sx={{ height: 220 }}
                />
              </Card>

              <Card elevation={3} sx={{ borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  image="/images/reception-2.jpg"
                  alt="Reception venue"
                  sx={{ height: 220 }}
                />
              </Card>
            </Box>
          </Grid>

          {/* DETAILS – LEFT */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Reception
            </Typography>

            <Typography sx={{ mb: 1 }}>October 5, 2026 • 6:00 PM</Typography>

            <Typography>
              Terra Gaucha Brazilian Steakhouse – Rockville
            </Typography>

            <Typography sx={{ mb: 4 }}>
              1651 Chapman Ave
              <br />
              Rockville, MD 20852
            </Typography>

            <iframe
              title="Reception"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6195.767736568934!2d-77.1257551875292!3d39.06356063676307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cdca478fc35b%3A0xd9ee9071241e15be!2sTerra%20Gaucha%20Brazilian%20Steakhouse%20-%20Rockville!5e0!3m2!1sen!2sus!4v1769871946519!5m2!1sen!2sus"
              style={mapStyle}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
