import React from 'react';

export default function BgImageWithNavbar() {
  const styles = {
    header: {
      paddingLeft: 0,
    },
    bgImage: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: "url('https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      height: '600px',
      position: 'relative',
      color: 'white',
      textAlign: 'center',
    },
    mask: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '20px',
      animation: 'fadeIn 2s ease-in-out',
    },
    contentCenter: {
      textAlign: 'center',
      animation: 'slideIn 1.5s ease-in-out',
    },
    textWhite: {
      color: 'white',
    },
    button: {
      padding: '10px 20px',
      border: '1px solid white',
      background: 'transparent',
      color: 'white',
      textDecoration: 'none',
      transition: 'background 0.3s, color 0.3s',
      cursor: 'pointer',
      borderRadius: '5px',
      marginTop: '20px',
    },
    buttonHover: {
      background: 'white',
      color: 'black',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.bgImage}>
        <div style={styles.mask}>
          <div style={styles.contentCenter}>
            <div style={styles.textWhite}>
              <h1 className="mb-3" style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Welcome to E-Learning</h1>
              <h4 className="mb-3" style={{ fontSize: '1.5rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Empower Your Knowledge</h4>
              <a
                style={styles.button}
                href="#!"
                role="button"
                onMouseEnter={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}