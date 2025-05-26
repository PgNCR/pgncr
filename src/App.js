import pgncr from "./pgncr_logo.png";
import pghead from "./pghead.png";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
  },
});

const Navbar = () => (
  <AppBar position="static" color="white" elevation={0}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <a href="/">
          <img src={pgncr} width="20%" sx={{ p: 2 }} />
        </a>
      </Typography>
      <Tabs value={false} textColor="primary" indicatorColor="primary">
        <Tab label="About Us" component={Link} to="/about" />
        <Tab label="Events" component={Link} to="/events" />
        <Tab label="Content" component={Link} to="/content" />
        <Tab label="Archive" component={Link} to="/archive" />
      </Tabs>
    </Toolbar>
  </AppBar>
);

const Header = () => (
  <Box
    sx={{
      height: 400,
      textAlign: "center",
      width: "100%",
    }}
  >
    <img src={pghead} />
  </Box>
);

const AboutSection = () => (
  <Container sx={{ py: 5 }}>
    <Typography variant="h4" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1">
      Welcome to the PgNCR Meetup group! Our community is for individuals in the
      National Capital Region who share a passion for PostgreSQL database
      management system. Whether you are a seasoned professional or just
      starting out, we invite you to join us for networking, discussions,
      workshops, and presentations on all things related to PostgreSQL. Our goal
      is to foster collaboration and knowledge sharing among like-minded
      individuals in the tech industry. Let's connect, learn, and grow together
      as we explore the endless possibilities of PostgreSQL. Join us and be a
      part of our vibrant community!
    </Typography>
  </Container>
);

const Footer = () => (
  <Box
    sx={{
      backgroundColor: "#f5f5f5",
      py: 3,
      width: "100%",
      // mt: 5,
      textAlign: "center",
      bottom: 0,
      position: "fixed",
    }}
  >
    <Typography variant="body2">© 2025 PgNCR. All rights reserved.</Typography>
  </Box>
);

const HomePage = () => (
  <>
    <Header />
    <AboutSection />
  </>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        {/* Add placeholder routes for Events, Content, Archive */}
        <Route
          path="/events"
          element={
            <Container sx={{ py: 5 }}>
              <Typography variant="h4">Events</Typography>
            </Container>
          }
        />
        <Route
          path="/content"
          element={
            <Container sx={{ py: 5 }}>
              <Typography variant="h4">Content</Typography>
            </Container>
          }
        />
        <Route
          path="/archive"
          element={
            <Container sx={{ py: 5 }}>
              <Typography variant="h4">Archive</Typography>
            </Container>
          }
        />
      </Routes>
      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;
