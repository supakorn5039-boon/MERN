import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  const [anchorE1, setAnchorE1] = useState(null);
  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search */}
      <Box display="flex" borderRadius="3px" backgroundColor="#f5efe7"
    </Box>
    )
};

export default HeaderBar;