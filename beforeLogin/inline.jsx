import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollMovies = (direction) => {
    const container = document.querySelector('.movies-container');
    const scrollAmount = window.innerWidth <= 500 ? 300 : 600;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const faqs = [
    {
      question: "What is Netflix?",
      answer: [
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
      ]
    },
    {
      question: "How much does Netflix cost?",
      answer: [
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
      ]
    },
    {
      question: "Where can I watch?",
      answer: [
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
      ]
    },
    {
      question: "How do I cancel?",
      answer: [
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
      ]
    },
    {
      question: "What can I watch on Netflix?",
      answer: [
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
      ]
    },
    {
      question: "Is Netflix good for kids?",
      answer: [
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
      ]
    }
  ];

  // Responsive styles
  const styles = {
    global: {
      fontFamily: '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif',
      color: 'white',
      backgroundColor: 'black',
      overflowX: 'hidden',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '25px',
      position: 'relative',
      margin: '20px',
      zIndex: 9,
      '@media (max-width: 600px)': {
        marginTop: '20px'
      }
    },
    logo: {
      width: 'auto',
      height: '40px',
      padding: '0px',
      '@media (max-width: 600px)': {
        height: '25px',
        marginTop: '5px'
      }
    },
    headerButtons: {
      display: 'flex',
      gap: '0px',
      flexDirection: 'row'
    },
    languageSelect: {
      position: 'relative',
      '@media (max-width: 600px)': {
        marginRight: '10px'
      }
    },
    languageBox: {
      border: '1px solid #999',
      height: '32px',
      width: '120px',
      marginRight: '10px',
      borderRadius: '5px',
      background: '#0f0f0f',
      '@media (max-width: 600px)': {
        height: '30px',
        width: '90px',
        background: 'transparent'
      }
    },
    languageIcon: {
      position: 'absolute',
      top: '19%',
      left: '5%',
      width: '16px',
      height: '16px'
    },
    select: {
      width: '100%',
      height: '100%',
      background: 'transparent',
      color: 'white',
      paddingLeft: '30px',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      '@media (max-width: 600px)': {
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }
    },
    signInButton: {
      width: '80px',
      border: 'none',
      background: '#cd141d',
      color: 'white',
      padding: '0px',
      height: '32px',
      borderRadius: '5px',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer',
      '@media (max-width: 600px)': {
        height: '30px',
        fontSize: '14px'
      }
    },
    heroSection: {
      position: 'relative',
      height: '100vh',
      width: '100%'
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100%',
      backgroundImage: 'url("/Netflix-bg.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    },
    heroOverlay: {
      backgroundColor: 'black',
      zIndex: 1,
      position: 'absolute',
      opacity: 0.7,
      height: '100%',
      width: '100%',
      top: 0
    },
    heroContent: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      height: '100%',
      zIndex: 2,
      padding: '0 20px'
    },
    heroTitle: {
      fontSize: '56px',
      fontWeight: 900,
      fontFamily: 'Roboto, "Helvetica Neue", "Segoe UI", Ubuntu, sans-serif',
      width: '700px',
      marginBottom: '20px',
      lineHeight: '1.2',
      '@media (max-width: 992px)': {
        fontSize: '34px',
        width: '500px'
      },
      '@media (max-width: 600px)': {
        fontSize: '2rem',
        width: '82vw',
        marginTop: '55px'
      }
    },
    heroSubtitle: {
      fontSize: '24px',
      marginBottom: '15px',
      '@media (max-width: 600px)': {
        fontSize: '17px'
      }
    },
    heroText: {
      width: '56vw',
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '1.5',
      marginBottom: '20px',
      '@media (max-width: 600px)': {
        width: '80vw',
        fontSize: '16px',
        lineHeight: '23px'
      }
    },
    emailForm: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      '@media (max-width: 600px)': {
        flexDirection: 'column'
      }
    },
    emailInput: {
      background: 'rgba(0,0,0,0.7)',
      color: 'white',
      padding: '10px',
      fontSize: '15px',
      fontWeight: 600,
      width: '26vw',
      marginRight: '5px',
      border: '1px solid #999',
      borderRadius: '5px',
      height: '60px',
      minWidth: '300px',
      '@media (max-width: 600px)': {
        width: '80vw',
        height: '50px',
        marginRight: 0,
        marginTop: '15px'
      },
      '@media (min-width: 600px) and (max-width: 768px)': {
        width: '30vw',
        height: '55px'
      }
    },
    getStartedButton: {
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#cd141d',
      color: 'white',
      width: '200px',
      fontSize: '23px',
      fontWeight: 'bold',
      height: '59px',
      cursor: 'pointer',
      '@media (max-width: 600px)': {
        width: '40vw',
        fontSize: '19px',
        height: '50px',
        marginTop: '15px'
      },
      '@media (min-width: 600px) and (max-width: 768px)': {
        width: '20vw',
        height: '55px',
        marginTop: '15px'
      }
    },
    trendingSection: {
      position: 'relative',
      padding: '50px 0 30px',
      backgroundColor: 'black',
      marginTop: '-80px',
      zIndex: 10
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#fff',
      marginLeft: '4%',
      marginBottom: '20px',
      '@media (max-width: 800px)': {
        fontSize: '1.3rem'
      }
    },
    movieCarousel: {
      position: 'relative',
      width: '100%'
    },
    moviesContainer: {
      display: 'flex',
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      gap: '10px',
      padding: '0 4%',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    movieCard: {
      position: 'relative',
      flex: '0 0 auto',
      transition: 'transform 0.3s ease',
      marginRight: '10px',
      '&:hover': {
        transform: 'scale(1.1)',
        zIndex: 10
      }
    },
    movieNumber: {
      position: 'absolute',
      left: '10px',
      bottom: '20px',
      color: 'black',
      fontSize: '5em',
      fontWeight: 900,
      lineHeight: '0.8',
      zIndex: 2,
      textShadow: '2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff',
      '@media (max-width: 800px)': {
        fontSize: '4em',
        bottom: '15px',
        left: '8px'
      },
      '@media (max-width: 500px)': {
        fontSize: '3em',
        bottom: '10px',
        left: '5px'
      }
    },
    movieImage: {
      width: '175px',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '4px',
      transition: 'transform 0.3s ease',
      '@media (max-width: 800px)': {
        width: '140px',
        height: '180px'
      },
      '@media (max-width: 500px)': {
        width: 'calc(40vw - 30px)',
        height: 'calc((40vw - 30px) * 1.5)'
      }
    },
    scrollButton: {
      position: 'absolute',
      top: '50%',
      width: '50px',
      height: '100px',
      background: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      zIndex: 10,
      transform: 'translateY(-50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s',
      '&:hover': {
        opacity: 1
      },
      '@media (max-width: 500px)': {
        width: '30px',
        height: '80px',
        fontSize: '18px'
      }
    },
    scrollLeft: {
      left: 0,
      borderRadius: '0 4px 4px 0'
    },
    scrollRight: {
      right: 0,
      borderRadius: '4px 0 0 4px'
    },
    reasonsSection: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '60px 20px',
      fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif',
      '@media (max-width: 768px)': {
        padding: '40px 15px'
      }
    },
    reasonsTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '20px',
      textAlign: 'center',
      position: 'relative',
      '@media (max-width: 768px)': {
        fontSize: '1.75rem',
        marginBottom: '30px'
      },
      '@media (max-width: 480px)': {
        fontSize: '1.5rem'
      }
    },
    reasonsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      '@media (max-width: 768px)': {
        flexWrap: 'wrap'
      }
    },
    reasonCard: {
      flex: '1 1 300px',
      maxWidth: '350px',
      background: 'linear-gradient(135deg, #1a2144, #20101d)',
      borderRadius: '20px',
      padding: '30px',
      boxSizing: 'border-box',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)'
      },
      '@media (max-width: 768px)': {
        flex: '1 1 100%',
        maxWidth: '100%'
      }
    },
    reasonTitle: {
      fontSize: '1.5rem',
      fontWeight: 500,
      marginBottom: '15px',
      color: '#fff',
      '@media (max-width: 480px)': {
        fontSize: '1.3rem'
      }
    },
    reasonText: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '1rem',
      lineHeight: '1.5',
      marginBottom: '20px',
      '@media (max-width: 480px)': {
        fontSize: '0.9rem'
      }
    },
    iconContainer: {
      textAlign: 'center',
      marginTop: '20px',
      position: 'relative',
      right: '-45%',
      top: '0px',
      '@media (max-width: 480px)': {
        '& svg': {
          width: '60px',
          height: '60px'
        }
      }
    },
    faqSection: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '60px 20px',
      fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      '@media (max-width: 768px)': {
        padding: '40px 15px'
      }
    },
    faqTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '40px',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        fontSize: '1.75rem',
        marginBottom: '30px'
      },
      '@media (max-width: 480px)': {
        fontSize: '1.1rem'
      }
    },
    faqContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto'
    },
    faqItemWrapper: {
      marginBottom: '8px'
    },
    faqQuestion: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2d2d2d',
      color: 'white',
      border: 'none',
      padding: '24px',
      fontSize: '1.5rem',
      fontWeight: 400,
      textAlign: 'left',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      width: '100%',
      boxSizing: 'border-box',
      '&.active': {
        backgroundColor: '#4c4848'
      },
      '&:hover': {
        backgroundColor: '#4c4848'
      },
      '@media (max-width: 768px)': {
        fontSize: '1.25rem',
        padding: '18px'
      },
      '@media (max-width: 480px)': {
        fontSize: '1rem',
        padding: '14px'
      }
    },
    faqIcon: {
      flexShrink: 0,
      marginLeft: '20px',
      transition: 'transform 0.3s ease',
      '&.active': {
        transform: 'rotate(45deg)'
      },
      '@media (max-width: 480px)': {
        width: '20px',
        height: '20px'
      }
    },
    faqAnswer: {
      backgroundColor: '#2d2d2d',
      padding: '24px',
      marginTop: '1px',
      textAlign: 'left',
      '@media (max-width: 768px)': {
        padding: '18px'
      },
      '@media (max-width: 480px)': {
        padding: '14px'
      }
    },
    faqAnswerText: {
      fontSize: '1.25rem',
      lineHeight: '1.4',
      color: '#fff',
      marginBottom: '15px',
      '@media (max-width: 768px)': {
        fontSize: '1.1rem'
      },
      '@media (max-width: 480px)': {
        fontSize: '0.9rem'
      }
    },
    footerContainer: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '70px 45px 0',
      '@media (max-width: 960px)': {
        padding: '70px 30px 0'
      },
      '@media (max-width: 600px)': {
        padding: '50px 15px 0'
      }
    },
    readySection: {
      maxWidth: '950px',
      margin: '0 auto',
      padding: '0 0 50px',
      textAlign: 'center'
    },
    readyText: {
      fontSize: '1rem',
      marginBottom: '20px',
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      }
    },
    footerEmailForm: {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      gap: '10px',
      maxWidth: '750px',
      margin: '0 auto',
      '@media (max-width: 600px)': {
        flexDirection: 'column',
        alignItems: 'flex-start'
      }
    },
    footerEmailInput: {
      width: '55vw',
      padding: '15px 10px',
      height: '8vh',
      fontSize: '16px',
      border: '1px solid #333',
      borderRadius: '2px',
      background: 'rgba(0,0,0,0.7)',
      color: '#fff',
      '@media (max-width: 600px)': {
        width: '100%'
      }
    },
    footerGetStarted: {
      padding: '5px 24px',
      height: '8vh',
      width: '21vw',
      fontSize: '1.2rem',
      fontWeight: 500,
      background: '#e50914',
      color: '#fff',
      border: 'none',
      borderRadius: '2px',
      cursor: 'pointer',
      '@media (max-width: 960px)': {
        width: '200px',
        fontSize: '1.3rem'
      },
      '@media (max-width: 600px)': {
        width: '200px',
        fontSize: '1.3rem',
        padding: '1px 24px'
      }
    },
    footer: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 0 50px'
    },
    footerTop: {
      margin: '0 0 30px'
    },
    questions: {
      fontSize: '1rem',
      color: '#757575',
      '& a': {
        color: '#757575',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    },
    footerLinks: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '15px',
      marginBottom: '30px',
      '@media (max-width: 960px)': {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr'
      }
    },
    linkColumn: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column'
    },
    linkItem: {
      color: '#d7d3d3',
      fontSize: '15px',
      textDecoration: 'none',
      marginBottom: '15px',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    languageSelector: {
      position: 'relative',
      display: 'inline-block',
      marginBottom: '20px'
    },
    footerLanguageIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '16px',
      height: '16px',
      pointerEvents: 'none'
    },
    languageDropdown: {
      padding: '8px 10px 8px 36px',
      fontSize: '13px',
      color: '#fff',
      background: '#000',
      border: '1px solid #333',
      borderRadius: '2px',
      cursor: 'pointer'
    },
    netflixIndia: {
      fontSize: '13px',
      color: '#757575',
      marginTop: '24px'
    }
  };

  // Function to apply responsive styles
  const getStyle = (baseStyle) => {
    const style = { ...baseStyle };
    delete style['@media'];
    return style;
  };

  return (
    <div style={styles.global}>
      {/* Header */}
      <header style={getStyle(styles.header)}>
        <img src="/net.svg" alt="Netflix Logo" style={getStyle(styles.logo)} />
        <div style={styles.headerButtons}>
          <div style={styles.languageSelect}>
            <div style={getStyle(styles.languageBox)}>
              <svg style={styles.languageIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="white"></path>
              </svg>
              <select style={getStyle(styles.select)}>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
              <i className='fa-solid fa-caret-down' style={{
                position: 'absolute',
                right: '8px',
                top: '10px',
                fontSize: '12px',
                color: 'white'
              }}></i>
            </div>
          </div>
          <button 
            style={getStyle(styles.signInButton)}
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={getStyle(styles.heroTitle)}>Unlimited movies, TV shows and more</h1>
          <h5 style={styles.heroSubtitle}>Starts at ₹149. Cancel at any time.</h5>
          <span style={getStyle(styles.heroText)}>
            Ready to watch? Enter your email to create or restart your membership.
          </span>
          <div style={styles.emailForm}>
            <input 
              type="email" 
              placeholder="Email address" 
              style={getStyle(styles.emailInput)} 
            />
            <button style={getStyle(styles.getStartedButton)}>
              Get Started <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section style={styles.trendingSection}>
        <div style={{
          boxSizing: 'border-box',
          overflowX: 'hidden',
          position: 'relative',
          height: '6.25rem',
          zIndex: 1
        }}>
          <div style={{
            width: '200%',
            left: '-50%',
            boxSizing: 'border-box',
            position: 'absolute',
            height: '100%',
            top: 0,
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            border: 'solid 0.25rem transparent',
            borderTopLeftRadius: '50% 100%',
            borderTopRightRadius: '50% 100%',
            borderBottom: 'none',
            background: 'radial-gradient(50% 500% at 50% -420%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100%), black',
            WebkitBackgroundClip: 'padding-box',
            backgroundClip: 'padding-box'
          }}>
            <div style={{
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: -1,
              marginTop: '-0.25rem',
              borderRadius: 'inherit',
              background: 'linear-gradient(to right, rgba(33, 13, 22, 1) 16%, rgba(184, 40, 105, 1), rgba(229, 9, 20, 1), rgba(184, 40, 105, 1), rgba(33, 13, 22, 1) 84%)'
            }}></div>
          </div>
        </div>

        <h4 style={styles.sectionTitle}>Trending Now</h4>
        
        <div style={styles.movieCarousel}>
          <button 
            style={{ ...styles.scrollButton, ...styles.scrollLeft }}
            onClick={() => scrollMovies('left')}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
          >
            &#8249;
          </button>
          
          <div style={styles.moviesContainer} className="movies-container">
            {[...Array(10)].map((_, i) => (
              <div key={i} style={styles.movieCard} className="movie-card">
                <div style={styles.movieNumber}>{i + 1}</div>
                <img 
                  src={`/movie${i + 1}.webp`} 
                  alt={`Movie ${i + 1}`} 
                  style={styles.movieImage}
                />
              </div>
            ))}
          </div>
          
          <button 
            style={{ ...styles.scrollButton, ...styles.scrollRight }}
            onClick={() => scrollMovies('right')}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
          >
            &#8250;
          </button>
        </div>
      </section>

      {/* More Reasons Section */}
      <section style={styles.reasonsSection}>
        <h2 style={styles.reasonsTitle}>More reasons to join</h2>
        
        <div style={styles.reasonsContainer}>
          {[
            {
              title: "Enjoy on your TV",
              description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
              icon: (
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  {/* TV icon SVG path */}
                </svg>
              )
            },
            {
              title: "Download your shows to watch offline",
              description: "Save your favourites easily and always have something to watch.",
              icon: (
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  {/* Download icon SVG path */}
                </svg>
              )
            },
            {
              title: "Watch everywhere",
              description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
              icon: (
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  {/* Watch everywhere icon SVG path */}
                </svg>
              )
            },
            {
              title: "Create profiles for kids",
              description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
              icon: (
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  {/* Kids profile icon SVG path */}
                </svg>
              )
            }
          ].map((reason, index) => (
            <div 
              key={index} 
              style={styles.reasonCard}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={styles.reasonTitle}>{reason.title}</h3>
              <p style={styles.reasonText}>{reason.description}</p>
              <div style={styles.iconContainer}>
                {reason.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
        
        <div style={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItemWrapper}>
              <button 
                style={{
                  ...styles.faqQuestion,
                  backgroundColor: activeFaq === index ? '#4c4848' : '#2d2d2d'
                }}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24"
                  style={{
                    ...styles.faqIcon,
                    transform: activeFaq === index ? 'rotate(45deg)' : 'rotate(0)'
                  }}
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" 
                    fill="currentColor"
                  />
                </svg>
              </button>
              {activeFaq === index && (
                <div style={styles.faqAnswer}>
                  {faq.answer.map((paragraph, i) => (
                    <p key={i} style={styles.faqAnswerText}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <div style={styles.footerContainer}>
        <div style={styles.readySection}>
          <p style={styles.readyText}>Ready to watch? Enter your email to create or restart your membership.</p>
          <div style={styles.footerEmailForm}>
            <input 
              type="email" 
              placeholder="Email address" 
              style={styles.footerEmailInput}
            />
            <button style={styles.footerGetStarted}>Get Started &gt;</button>
          </div>
        </div>

        <div style={styles.footer}>
          <div style={styles.footerTop}>
            <p style={styles.questions}>Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></p>
          </div>
          
          <div style={styles.footerLinks}>
            <ul style={styles.linkColumn}>
              <li><a href="#" style={styles.linkItem}>FAQ</a></li>
              <li><a href="#" style={styles.linkItem}>Investor Relations</a></li>
              <li><a href="#" style={styles.linkItem}>Privacy</a></li>
              <li><a href="#" style={styles.linkItem}>Speed Test</a></li>
            </ul>
            
            <ul style={styles.linkColumn}>
              <li><a href="#" style={styles.linkItem}>Help Centre</a></li>
              <li><a href="#" style={styles.linkItem}>Jobs</a></li>
              <li><a href="#" style={styles.linkItem}>Cookie Preferences</a></li>
              <li><a href="#" style={styles.linkItem}>Legal Notices</a></li>
            </ul>
            
            <ul style={styles.linkColumn}>
              <li><a href="#" style={styles.linkItem}>Account</a></li>
              <li><a href="#" style={styles.linkItem}>Ways to Watch</a></li>
              <li><a href="#" style={styles.linkItem}>Corporate Information</a></li>
              <li><a href="#" style={styles.linkItem}>Only on Netflix</a></li>
            </ul>
            
            <ul style={styles.linkColumn}>
              <li><a href="#" style={styles.linkItem}>Media Centre</a></li>
              <li><a href="#" style={styles.linkItem}>Terms of Use</a></li>
              <li><a href="#" style={styles.linkItem}>Contact Us</a></li>
            </ul>
          </div>
          
          <div style={styles.languageSelector}>
            <svg style={styles.footerLanguageIcon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
            </svg>
            <select style={styles.languageDropdown}>
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
          
          <p style={styles.netflixIndia}>Netflix India</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;