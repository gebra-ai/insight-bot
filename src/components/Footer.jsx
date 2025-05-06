import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link as MuiLink, 
  Divider
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              InsightBot AI
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.400' }}>
              Smart, AI-powered assistant for customer support teams.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 2 }}>
              Product
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <MuiLink component={Link} to="/product" sx={{ color: 'grey.400', '&:hover': { color: 'white' }, textDecoration: 'none' }}>
                  Overview
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <MuiLink component={Link} to="/product/features" sx={{ color: 'grey.400', '&:hover': { color: 'white' }, textDecoration: 'none' }}>
                  Features
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <MuiLink component={Link} to="/product/integrations" sx={{ color: 'grey.400', '&:hover': { color: 'white' }, textDecoration: 'none' }}>
                  Integrations
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <MuiLink component={Link} to="/product/how-it-works" sx={{ color: 'grey.400', '&:hover': { color: 'white' }, textDecoration: 'none' }}>
                  How It Works
                </MuiLink>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 2 }}>
              Company
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <MuiLink component={Link} to="/pricing" sx={{ color: 'grey.400', '&:hover': { color: 'white' }, textDecoration: 'none' }}>
                  Pricing
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <MuiLink component={Link} to="/contact" sx={{ color: 'grey.400', '&:hover': { color: 'white' }, textDecoration: 'none' }}>
                  Contact
                </MuiLink>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.400', mb: 1 }}>
              Want to try InsightBot AI or integrate into your support system?
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <EmailIcon sx={{ fontSize: 18, mr: 1, color: 'grey.400' }} />
              <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.400' }}>
                avinash@gebra.ai
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, bgcolor: 'grey.800' }} />
        
        <Typography variant="body2" align="center" color="text.secondary" sx={{ color: 'grey.500' }}>
          © {new Date().getFullYear()} InsightBot AI. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
