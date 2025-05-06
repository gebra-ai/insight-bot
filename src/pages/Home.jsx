import { Link } from 'react-router-dom'
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box 
        component="section" 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: { xs: 8, md: 10 } 
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.75rem' }, 
                fontWeight: 700, 
                mb: 3,
                lineHeight: 1.2
              }}
            >
              AI-Powered Customer Support Assistant
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                fontSize: { xs: '1.25rem', md: '1.5rem' }, 
                mb: 5, 
                maxWidth: '900px', 
                mx: 'auto',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              InsightBot AI analyzes live conversations, detects sentiment, and suggests relevant responses to help your support team save time and improve satisfaction.
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center"
            >
              <Button 
                component={Link} 
                to="/product" 
                variant="contained" 
                size="large" 
                startIcon={<ExploreIcon />}
                sx={{ 
                  bgcolor: 'primary.light',
                  '&:hover': { 
                    bgcolor: 'primary.dark' 
                  },
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                Product Tour
              </Button>
              
              <Button 
                component={Link} 
                to="/contact" 
                variant="outlined" 
                size="large" 
                startIcon={<ContactSupportIcon />}
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': { 
                    bgcolor: 'white', 
                    color: 'primary.main',
                    borderColor: 'white'
                  },
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                Contact Sales
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">Real-time NLP</h3>
              <p className="text-gray-600">
                Analyze sentiment and detect intent in customer conversations as they happen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">RAG Technology</h3>
              <p className="text-gray-600">
                Retrieval-Augmented Generation using your company's support documentation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-600">
                Seamlessly connects with Zendesk, Intercom, and Freshdesk.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4 text-gray-600">
                "InsightBot AI has cut our response time by 60% and significantly improved our customer satisfaction scores."
              </p>
              <div className="font-medium">Jane Doe, Support Director at TechCorp</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4 text-gray-600">
                "Training new agents is so much easier now. The AI suggestions help them learn our knowledge base much faster."
              </p>
              <div className="font-medium">John Smith, Customer Success at StartupX</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <Box 
        component="section" 
        sx={{ 
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Ready to Transform Your Customer Support?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              mx: 'auto',
              color: 'text.secondary',
              maxWidth: '700px'
            }}
          >
            Join the companies using InsightBot AI to provide faster, more accurate support.
          </Typography>
          
          <Button
            component={Link}
            to="/pricing"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'primary.light',
              '&:hover': { bgcolor: 'primary.dark' },
              px: 4,
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            View Pricing Plans
          </Button>
        </Container>
      </Box>
    </div>
  )
}

export default Home
