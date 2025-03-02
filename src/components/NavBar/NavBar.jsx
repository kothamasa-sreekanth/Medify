import {
  Box,
  Container,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";
import { useState, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AuthContext from "../../components/Context/AuthContext.js"; // Import AuthContext

export default function NavBar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // Get auth state

  return (
    <header>
      <Box p={1} bgcolor="primary.main">
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" py={2}>
          <Link to="/">
            <img src={logo} alt="Logo" height={27} />
          </Link>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", md: "center" }}
            className={[styles.navlinks, menuOpen && styles.active]}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}
          >
            <Link>Find Doctors</Link>
            <Link to="/search">Hospitals</Link>
            <Link>Medicines</Link>
            <Link>Surgeries</Link>
            <Link>Software for Provider</Link>
            <Link>Facilities</Link>

            {/* Show My Bookings & Logout if user is logged in */}
            {user ? (
              <>
                <Link to="/my-bookings">
                  <Button variant="contained" disableElevation>
                    My Bookings
                  </Button>
                </Link>
                <Button variant="outlined" color="error" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                {/* Show Login & Signup if user is NOT logged in */}
                <Link to="/login">
                  <Button variant="contained" disableElevation>
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outlined" color="primary">
                    Signup
                  </Button>
                </Link>
              </>
            )}

            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 32,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>

          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>
    </header>
  );
}
