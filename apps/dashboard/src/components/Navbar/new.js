import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from "components/Breadcrumbs";
import * as React from 'react';
import { useLocation } from "react-router-dom";
import classes from './navbar.module.scss';

function Navbar(props) {
  const route = useLocation().pathname.split("/").slice(1);

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        width: { md: `calc(100% - ${props.drawerWidth}px)` },
        ml: { md: `${props.drawerWidth}px` },
        marginBottom: theme.spacing(2),
      })}
      color='transparent'
      elevation={0}
      className={classes.customAppBar}
    >
      <Toolbar
        className={classes.customToolbar}
        sx={(theme) => ({
          borderRadius: theme.rounded.lg,
          boxShadow: theme.shadows[3]
        })}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box color="inherit" mb={{ xs: 1, md: 0 }}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} />
        </Box>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;