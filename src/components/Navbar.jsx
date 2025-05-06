import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // For product dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  // For mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const handleProductMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleProductMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="static" color="primary" elevation={4}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
            }}
          >
            <SmartToyIcon sx={{ mr: 1 }} />
            InsightBot AI
          </Typography>

          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton component={NavLink} to="/" onClick={handleDrawerToggle}>
                        <ListItemText primary="Home" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component={NavLink} to="/product" onClick={handleDrawerToggle}>
                        <ListItemText primary="Product" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ pl: 4 }} disablePadding>
                      <ListItemButton component={NavLink} to="/product/features" onClick={handleDrawerToggle}>
                        <ListItemText primary="Features" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ pl: 4 }} disablePadding>
                      <ListItemButton component={NavLink} to="/product/integrations" onClick={handleDrawerToggle}>
                        <ListItemText primary="Integrations" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ pl: 4 }} disablePadding>
                      <ListItemButton component={NavLink} to="/product/how-it-works" onClick={handleDrawerToggle}>
                        <ListItemText primary="How It Works" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component={NavLink} to="/pricing" onClick={handleDrawerToggle}>
                        <ListItemText primary="Pricing" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component={NavLink} to="/contact" onClick={handleDrawerToggle}>
                        <ListItemText primary="Contact" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex', ml: 4 }}>
                <Button
                  component={NavLink}
                  to="/"
                  sx={{
                    color: 'white',
                    '&.active': {
                      color: theme.palette.primary.light,
                      fontWeight: 'medium',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Home
                </Button>
                
                <Box>
                  <Button
                    id="product-button"
                    aria-controls={open ? 'product-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleProductMenuClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{
                      color: 'white',
                      '&.active': {
                        color: theme.palette.primary.light,
                        fontWeight: 'medium',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Product
                  </Button>
                  <Menu
                    id="product-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleProductMenuClose}
                    MenuListProps={{
                      'aria-labelledby': 'product-button',
                    }}
                  >
                    <MenuItem 
                      component={NavLink} 
                      to="/product" 
                      onClick={handleProductMenuClose}
                      sx={{ minWidth: 150 }}
                    >
                      Overview
                    </MenuItem>
                    <MenuItem 
                      component={NavLink} 
                      to="/product/features" 
                      onClick={handleProductMenuClose}
                    >
                      Features
                    </MenuItem>
                    <MenuItem 
                      component={NavLink} 
                      to="/product/integrations" 
                      onClick={handleProductMenuClose}
                    >
                      Integrations
                    </MenuItem>
                    <MenuItem 
                      component={NavLink} 
                      to="/product/how-it-works" 
                      onClick={handleProductMenuClose}
                    >
                      How It Works
                    </MenuItem>
                  </Menu>
                </Box>
                
                <Button
                  component={NavLink}
                  to="/pricing"
                  sx={{
                    color: 'white',
                    '&.active': {
                      color: theme.palette.primary.light,
                      fontWeight: 'medium',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Pricing
                </Button>
                
                <Button
                  component={NavLink}
                  to="/contact"
                  sx={{
                    color: 'white',
                    '&.active': {
                      color: theme.palette.primary.light,
                      fontWeight: 'medium',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Contact
                </Button>
              </Box>
            </>
          )}

          <Button 
            variant="contained" 
            color="secondary" 
            disableElevation
            sx={{ 
              bgcolor: theme.palette.primary.light,
              color: 'white',
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
              }
            }}
          >
            Get Started
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
