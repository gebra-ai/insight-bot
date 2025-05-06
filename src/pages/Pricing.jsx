import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardHeader, 
  CardContent, 
  Button, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Chip, 
  Paper,
  useTheme
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';

const Pricing = () => {
  const theme = useTheme();

  const planFeatures = {
    starter: [
      'Real-time sentiment analysis',
      'Basic intent detection',
      'Response suggestions',
      'Knowledge base integration (up to 500 articles)',
      '1 platform integration',
      'Email support',
    ],
    professional: [
      'Everything in Starter',
      'Advanced intent detection',
      'Multilingual support (10 languages)',
      'Knowledge base integration (up to 2,000 articles)',
      '2 platform integrations',
      'Email + chat support',
      'Analytics dashboard',
    ],
    enterprise: [
      'Everything in Professional',
      'Custom AI model training',
      'Multilingual support (30+ languages)',
      'Unlimited knowledge base integration',
      'All platform integrations + custom options',
      '24/7 priority support',
      'Dedicated customer success manager',
      'On-premises deployment option',
    ],
  };

  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees for Starter and Professional plans. Enterprise plans may include setup fees depending on customization requirements.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, we offer a 14-day free trial of our Professional plan. No credit card required to start your trial.'
    },
    {
      question: 'What happens if I exceed my agent limit?',
      answer: 'If you exceed your agent limit consistently, we\'ll reach out to discuss upgrading to a plan that better fits your team size.'
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Pricing Plans
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Choose the plan that fits your team size and support volume. All plans include our core AI features and integration with major support platforms.
        </Typography>
      </Box>
      
      <Grid container spacing={2} sx={{ mb: 8 }} justifyContent="center" alignItems="stretch">
        {/* Starter Plan */}
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Card 
            elevation={3} 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <CardHeader
              title={
                <Typography variant="h4" component="h3" fontWeight="bold">
                  Starter
                </Typography>
              }
              subheader="For small support teams"
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{ align: 'center' }}
              sx={{ 
                backgroundColor: 'grey.50',
                pb: 4
              }}
            />
            <Box 
              sx={{ 
                backgroundColor: 'grey.50',
                textAlign: 'center',
                pb: 3,
                borderBottom: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
                <Typography component="h2" variant="h3" fontWeight="bold">
                  $499
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ ml: 1 }}>
                  /mo
                </Typography>
              </Box>
              <Typography variant="subtitle2" color="text.secondary">
                Up to 5 agents
              </Typography>
            </Box>
            <CardContent sx={{ flexGrow: 1, pt: 3 }}>
              <List disablePadding>
                {planFeatures.starter.map((feature, index) => (
                  <ListItem key={index} disableGutters disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 28, color: 'success.main' }}>
                      <CheckCircleOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <Box sx={{ p: 3, pt: 0 }}>
              <Button 
                component={Link} 
                to="/contact" 
                variant="contained" 
                fullWidth
                size="large"
                sx={{ 
                  bgcolor: theme.palette.primary.light,
                  '&:hover': { bgcolor: theme.palette.primary.dark }
                }}
              >
                Get Started
              </Button>
            </Box>
          </Card>
        </Grid>
        
        {/* Professional Plan */}
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Card 
            elevation={5} 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              border: `2px solid ${theme.palette.primary.main}`,
              zIndex: 1,
              position: 'relative'
            }}
          >
            <Box 
              sx={{ 
                position: 'absolute', 
                top: -15, 
                left: 0, 
                right: 0, 
                display: 'flex', 
                justifyContent: 'center' 
              }}
            >
              <Chip 
                icon={<StarIcon />} 
                label="MOST POPULAR" 
                color="primary" 
                sx={{ 
                  fontWeight: 'bold',
                  backgroundColor: 'warning.light',
                  color: 'primary.dark'
                }} 
              />
            </Box>
            <CardHeader
              title={
                <Typography variant="h4" component="h3" fontWeight="bold">
                  Professional
                </Typography>
              }
              subheader="For growing teams"
              titleTypographyProps={{ align: 'center', color: 'white' }}
              subheaderTypographyProps={{ align: 'center', color: 'primary.light' }}
              sx={{ 
                backgroundColor: theme.palette.primary.main,
                pb: 4,
                pt: 5
              }}
            />
            <Box 
              sx={{ 
                backgroundColor: theme.palette.primary.main,
                textAlign: 'center',
                pb: 3,
                color: 'white',
                borderBottom: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
                <Typography component="h2" variant="h3" fontWeight="bold">
                  $1,199
                </Typography>
                <Typography variant="h6" sx={{ ml: 1, opacity: 0.8 }}>
                  /mo
                </Typography>
              </Box>
              <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                Up to 15 agents
              </Typography>
            </Box>
            <CardContent sx={{ flexGrow: 1, pt: 3 }}>
              <List disablePadding>
                {planFeatures.professional.map((feature, index) => (
                  <ListItem key={index} disableGutters disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 28, color: 'success.main' }}>
                      <CheckCircleOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <Box sx={{ p: 3, pt: 0 }}>
              <Button 
                component={Link} 
                to="/contact" 
                variant="contained" 
                fullWidth
                size="large"
              >
                Get Started
              </Button>
            </Box>
          </Card>
        </Grid>
        
        {/* Enterprise Plan */}
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Card 
            elevation={3} 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <CardHeader
              title={
                <Typography variant="h4" component="h3" fontWeight="bold">
                  Enterprise
                </Typography>
              }
              subheader="For large teams"
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{ align: 'center' }}
              sx={{ 
                backgroundColor: 'grey.50',
                pb: 4
              }}
            />
            <Box 
              sx={{ 
                backgroundColor: 'grey.50',
                textAlign: 'center',
                pb: 3,
                borderBottom: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Typography component="h2" variant="h3" fontWeight="bold">
                Custom
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Unlimited agents
              </Typography>
            </Box>
            <CardContent sx={{ flexGrow: 1, pt: 3 }}>
              <List disablePadding>
                {planFeatures.enterprise.map((feature, index) => (
                  <ListItem key={index} disableGutters disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 28, color: 'success.main' }}>
                      <CheckCircleOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <Box sx={{ p: 3, pt: 0 }}>
              <Button 
                component={Link} 
                to="/contact" 
                variant="contained" 
                fullWidth
                size="large"
                sx={{ 
                  bgcolor: theme.palette.primary.light,
                  '&:hover': { bgcolor: theme.palette.primary.dark }
                }}
              >
                Contact Sales
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
      
      {/* FAQ Section */}
      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom 
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          Frequently Asked Questions
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, index) => (
            <Paper 
              key={index} 
              elevation={2} 
              sx={{ 
                p: 3, 
                mb: 3,
                '&:hover': {
                  boxShadow: 4
                },
                transition: 'box-shadow 0.3s ease-in-out'
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight="medium">
                {faq.question}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {faq.answer}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Pricing;
