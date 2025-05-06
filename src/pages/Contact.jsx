import { useState } from 'react';
import { 
  TextField, 
  Button, 
  Alert, 
  Box,
  Typography,
  Paper,
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      // Replace with your actual form submission logic
      // For example, using Formspree:
      // await fetch('https://formspree.io/f/your-form-id', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ 
      background: 'linear-gradient(to bottom, #e8f5fe, #ffffff)',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg" sx={{ py: 6, px: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 800, 
              fontSize: { xs: '2.5rem', sm: '3rem', lg: '3.75rem' }
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ 
              mt: 2, 
              mx: 'auto', 
              maxWidth: 'md'
            }}
          >
            Want to try InsightBot AI or integrate it into your support system? We're here to help.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' },
          gap: 4
        }}>
          {/* Contact Form on the left */}
          <Box sx={{ 
            flex: { xs: '1 1 100%', lg: '1 1 50%' }, 
            minWidth: 0 
          }}>
            <Paper elevation={3} sx={{ overflow: 'hidden', height: '100%', width: '100%' }}>
              <Box sx={{ p: 3, width: '100%' }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                  Send us a message
                </Typography>
                
                {submitSuccess && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for contacting us! We'll get back to you soon.
                  </Alert>
                )}
                
                {submitError && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    Something went wrong. Please try again or contact us directly.
                  </Alert>
                )}
                
                <form onSubmit={handleSubmit}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 3,
                    width: '100%'
                  }}>
                    <TextField
                      label="Name"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                    
                    <TextField
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                    
                    <TextField
                      label="Company"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                    
                    <TextField
                      label="Message"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      sx={{ py: 1.5, mt: 1 }}
                    >
                      {isSubmitting ? (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                          Sending...
                        </Box>
                      ) : 'Send Message'}
                    </Button>
                  </Box>
                </form>
              </Box>
            </Paper>
          </Box>
          
          {/* Contact Information - Three boxes stacked on the right */}
          <Box sx={{ 
            flex: { xs: '1 1 100%', lg: '1 1 50%' }, 
            display: 'flex', 
            flexDirection: 'column',
            gap: 3,
            minWidth: 0
          }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Email Us
              </Typography>
              <Typography variant="body1" color="text.secondary">
                For general inquiries, partnerships, or support:
              </Typography>
              <Typography 
                component="a" 
                href="mailto:avinash@gebra.ai" 
                variant="body1" 
                sx={{ 
                  color: 'primary.main', 
                  fontWeight: 500, 
                  mt: 1, 
                  display: 'block',
                  '&:hover': { color: 'primary.dark' }
                }}
              >
                avinash@gebra.ai
              </Typography>
            </Paper>
            
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Benefits of InsightBot AI
              </Typography>
              <List disablePadding>
                <ListItem disableGutters sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Cut support response time by 60%" />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Reduce training time for new agents" />
                </ListItem>
                <ListItem disableGutters sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Improve resolution accuracy via real-time suggestions" />
                </ListItem>
              </List>
            </Paper>
            
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Ready to Transform Your Customer Support?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Schedule a demo to see how InsightBot AI can integrate with your support platform and improve your customer experience.
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                sx={{ 
                  fontWeight: 'medium',
                  boxShadow: 2
                }}
              >
                Schedule Demo
              </Button>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
