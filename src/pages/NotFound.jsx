import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const NotFound = () => {
  return (
    <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
      <Paper 
        elevation={3}
        sx={{ 
          p: 6, 
          borderRadius: 4,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h1" component="h1" color="primary" sx={{ 
          fontSize: { xs: '5rem', md: '8rem' }, 
          fontWeight: 800,
          mb: 1
        }}>
          404
        </Typography>
        
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Page Not Found
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: '600px' }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link} 
            to="/"
            startIcon={<HomeIcon />}
            size="large"
          >
            Go Home
          </Button>
          
          <Button 
            variant="outlined" 
            color="primary" 
            component={Link} 
            to="/contact"
            startIcon={<ContactSupportIcon />}
            size="large"
          >
            Contact Support
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default NotFound;
