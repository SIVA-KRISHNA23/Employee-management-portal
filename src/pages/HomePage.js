import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material';

// Import images from the assets folder inside src
import backgroundImage1 from '../assets/image1.jpg';
import backgroundImage2 from '../assets/image2.jpg';
import backgroundImage3 from '../assets/image3.jpg';
import profileImageUrl from '../assets/img2.jpg';
import leaveImageUrl from '../assets/imi.jpg';
import salaryImageUrl from '../assets/money.jpg';
import blogImage1 from '../assets/blog1.jpg';
import blogImage2 from '../assets/blog2.jpg';
import blogImage3 from '../assets/blog3.jpg';

const HomePage = () => {  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3];

  // Automatically change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Handler for clicking dots
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* Sliding Background Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: `${backgroundImages.length * 100}%`,
            height: '100%',
            transform: `translateX(-${currentImageIndex * 100}%)`,
            transition: 'transform 1s ease',
          }}
        >
          {backgroundImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                flexShrink: 0,
              }}
            />
          ))}
        </Box>

        {/* Text Overlay */}
        <Container
          maxWidth="md"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              fontSize: '3rem',
            }}
          >
            Welcome to the Employee Portal!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginBottom: '40px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
              fontSize: '1.5rem',
            }}
          >
            Manage your profile, view your salary details, and apply for leaves effortlessly.
          </Typography>
        </Container>

        {/* Dots Navigation */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
          }}
        >
          {backgroundImages.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: currentImageIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          paddingTop: '80px',
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={3} justifyContent="center">
            {/* Card 1: Manage Profile */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Manage Profile
                  </Typography>
                  <img src={profileImageUrl} alt="Profile" style={{ width: '100%', marginBottom: '10px' }} />
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
                    Update personal details and contact information.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: '#8B4513',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#6A2E0C',
                      },
                    }}
                    variant="contained"
                    href="/login"
                  >
                    View Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Card 2: View Salaries */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    View Salaries
                  </Typography>
                  <img src={salaryImageUrl} alt="Salary" style={{ width: '100%', marginBottom: '10px' }} />
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
                    Access your salary slips and payment history.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: '#8B4513',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#6A2E0C',
                      },
                    }}
                    variant="contained"
                    href="/login"
                  >
                    View Salary
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Card 3: Apply for Leave */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Apply for Leave
                  </Typography>
                  <img src={leaveImageUrl} alt="Leave" style={{ width: '100%', marginBottom: '10px' }} />
                  <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
                    Apply for leave or view your leave balance.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: '#8B4513',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#6A2E0C',
                      },
                    }}
                    variant="contained"
                    href="/login"
                  >
                    Apply Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

   {/* Blogs Section */}
<Box  id="blogs-section" sx={{ backgroundColor: '#fff', padding: '40px 0' }}>
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      sx={{
        textAlign: 'left', // Align text to the left
        fontWeight: 'bold',
        marginBottom: '40px',
        color: '#8B4513', // Change the color to match the theme
        borderLeft: '5px solid #6A2E0C', // Add a decorative border
        paddingLeft: '15px', // Add padding for space between text and border
      }}
    >
      Latest Blogs
    </Typography>


        
          {/* Blog 1 */}
          <Grid
            container
            spacing={5}
            alignItems="center"
            sx={{
              marginBottom: '40px',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                animation: 'fadeInLeft 1s ease-in-out',
                '@keyframes fadeInLeft': {
                  from: {
                    opacity: 0,
                    transform: 'translateX(-50px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateX(0)',
                  },
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: '#6A2E0C',
                }}
              >
                Enhance Employee Productivity
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: '1.6',
                  color: '#333',
                }}
              >
                Discover how our platform streamlines tasks such as managing profiles,
                viewing salaries, and applying for leaves. Enjoy a seamless experience
                tailored for employees. By centralizing various HR tasks in one platform, employees can focus on what really matters—improving their work efficiency and productivity.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginTop: '10px',
                  fontStyle: 'italic',
                  color: '#555',
                }}
              >
                With easy access to key features like profile management, salary overview, and leave tracking, employees can manage their work-life balance effectively without any hassle. Our platform helps reduce administrative burden, allowing for more time spent on meaningful tasks.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                animation: 'fadeInRight 1s ease-in-out',
                '@keyframes fadeInRight': {
                  from: {
                    opacity: 0,
                    transform: 'translateX(50px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateX(0)',
                  },
                },
              }}
            >
              <img
                src={blogImage1}
                alt="Employee Productivity"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </Grid>
          </Grid>


          {/* Blog 2 */}
            <Grid
              container
              spacing={5}
              alignItems="center"
              sx={{
                marginBottom: '40px',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                order={{ xs: 2, md: 1 }}
                sx={{
                  animation: 'fadeInLeft 1s ease-in-out',
                  '@keyframes fadeInLeft': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(-50px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <img
                  src={blogImage2}
                  alt="Leave Management"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                order={{ xs: 1, md: 2 }}
                sx={{
                  animation: 'fadeInRight 1s ease-in-out',
                  '@keyframes fadeInRight': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(50px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    color: '#6A2E0C',
                  }}
                >
                  Simplify Leave Management
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: '1.6',
                    color: '#333',
                  }}
                >
                  Applying for leaves and tracking leave balances has never been easier.
                  Use our efficient tools to plan your time off without hassle. With the
                  flexibility to manage leaves seamlessly, employees can now request time off
                  with just a few clicks, making the process quicker and more organized.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '10px',
                    fontStyle: 'italic',
                    color: '#555',
                  }}
                >
                  Stay on top of your leave requests, track approval statuses, and ensure
                  you're always well-prepared. Our system ensures you never miss out on
                  essential time-off, and your team’s schedules remain optimized and efficient.
                </Typography>
              </Grid>
            </Grid>

            {/* Blog 3 */}
            <Grid
              container
              spacing={5}
              alignItems="center"
              sx={{
                marginBottom: '40px',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  animation: 'fadeInLeft 1s ease-in-out',
                  '@keyframes fadeInLeft': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(-50px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    color: '#6A2E0C',
                  }}
                >
                  Boost Workplace Collaboration
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: '1.6',
                    color: '#333',
                  }}
                >
                  Learn how our portal fosters better communication and collaboration
                  among employees, enabling a more connected and productive workplace
                  environment. By bringing all your work tools and information into one
                  platform, our solution reduces communication barriers and ensures everyone
                  stays on the same page.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '10px',
                    fontStyle: 'italic',
                    color: '#555',
                  }}
                >
                  Our platform's integration tools enhance project collaboration, making it
                  easier to share updates, collaborate on documents, and align team goals. By
                  boosting interaction and streamlining workflows, employees can work together
                  more efficiently, creating a more productive and engaging work culture.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  animation: 'fadeInRight 1s ease-in-out',
                  '@keyframes fadeInRight': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(50px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <img
                  src={blogImage3}
                  alt="Workplace Collaboration"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </Grid>
            </Grid>


        </Container>
      </Box>
    </>
  );
};

export default HomePage;
