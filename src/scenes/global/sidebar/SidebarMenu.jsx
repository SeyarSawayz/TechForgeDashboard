import React, { useState } from "react";
import { Box, IconButton, useTheme, Avatar, Typography } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      style={{ color: colors.grey[100] }}
      icon={icon}
    >
      <Typography variant="h5">{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SidebarMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollpased, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("dashboard");

  return (
    <>
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
            height: "163vh",
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollpased}>
          <Menu iconShape="sqaure">
            <MenuItem
              onClick={() => setIsCollapsed(!isCollpased)}
              icon={isCollpased ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "0px 0px 10px 0px",
                color: colors.grey[100],
              }}
            >
              {!isCollpased && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="10px"
                >
                  <Box display="flex" flexDirection="column" gap="5px">
                    <img src="/logo2.png" alt="logo" width="50px" />
                    <Typography variant="body" color={colors.grey[100]}>
                      TechForge
                    </Typography>
                  </Box>

                  <IconButton onClick={() => setIsCollapsed(!isCollpased)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
            {!isCollpased && (
              <Box
                margin="0px"
                width="100%"
                height="1px"
                sx={{ border: "1px solid #F9F7F7" }}
              />
            )}
            {!isCollpased && (
              <Box my="15px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Avatar
                    alt="Seyar"
                    src="/seyar.jpg"
                    sx={{ width: "100px", height: "100px" }}
                  />
                </Box>

                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0 " }}
                  >
                    Seyar Sawayz
                  </Typography>
                  <Typography
                    mt="5px"
                    variant="h5"
                    color={colors.greenAccent[500]}
                  >
                    Frontend Developer
                  </Typography>
                </Box>
              </Box>
            )}
            {/* MENU ITEMS  */}
            <Box paddingLeft={isCollpased ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Managed Team"
                to="/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Invoices Balances"
                to="/inovoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="FAQ pages"
                to="/faq"
                icon={<HelpOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </>
  );
};

export default SidebarMenu;
