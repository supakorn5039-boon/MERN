import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { Link } from "react-router-dom";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    title: "Product",
    icon: "",
    to: "/product",
  },
  {
    title: "Service",
    icon: "",
    to: "/service",
  },
  {
    title: "Contract",
    icon: "",
    to: "/contract",
  },
  {
    title: "Nebula",
    icon: "",
    to: "/Nebula",
  },
];

const authen = [
  {
    title: "Register",
    icon: <PeopleAltOutlinedIcon />,
    to: "/register",
  },
  {
    title: "Login",
    icon: <LoginIcon />,
    to: "/login",
  },
];

const settings = [
  {
    title: "Profile",
    icon: "",
    to: "/profile",
  },
  {
    title: "Dashboard",
    icon: "",
    to: "/dashboard",
  },
];

function ResponsiveAppBar() {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user.user.length);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#363062" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <IconButton>
                <Avatar alt="Remy Sharp" src="/assets/home.png" />
              </IconButton>
            </Link>
          </Typography>
          {/* /LOGO */}

          {/* Minimize Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link to={page.to} style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}

              {user.user.length === 0 &&
                authen.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link to={page.to} style={{ textDecoration: "none" }}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </Link>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          {/* /Minimize Menu */}

          {/* LOGO Minimize */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <IconButton>
                <Avatar alt="Remy Sharp" src="/assets/home.png" />
              </IconButton>
            </Link>
          </Typography>
          {/* /LOGO Minimize */}

          {/* Menu Left Full */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link to={page.to}>
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", mr: 5 }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
          {/* /Menu Left Full */}

          {/* Menu Right Full */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {user.user === 0 &&
              authen.map((page, index) => (
                <Link to={page.to}>
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      mr: 2,
                    }}
                    startIcon={page.icon}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
          </Box>
          {/* /Menu Right Full */}

          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/assets/Photo.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Link to={setting.to} style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">{setting.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* /User Menu */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
