import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { NavLink, useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tabs: {
    color: "#ffffff",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20,
  },
}));

export default function Navbar() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(isMobile);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink className={classes.tabs} to="/" exact>
             NREM
              
            </NavLink>
          </Typography>
          <div>
            {isMobile ? (
              <div>
                <IconButton
                  edge="start"
                  onClick={handleMenu}
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => onMenuClick("/")}>Home</MenuItem>
                <MenuItem onClick={() => onMenuClick("/about")}>About</MenuItem>
                <MenuItem onClick={() => onMenuClick("/contact")}>Contact</MenuItem>
                <MenuItem onClick={() => onMenuClick("/login")}>Login</MenuItem>
                <MenuItem onClick={() => onMenuClick("/register")}>Register</MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <NavLink className={classes.tabs} to="/" exact>
                  Home
                </NavLink>
                <NavLink className={classes.tabs} to="/about" exact>
                  About
                </NavLink>
                <NavLink className={classes.tabs} to="/contact" exact>
                Contact
                </NavLink>
                <NavLink className={classes.tabs} to="/login" exact>
                  Login
                </NavLink>
                <NavLink className={classes.tabs} to="/register" exact>
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

           
