import { useState, useEffect } from 'react';
import './App.css'; // Make sure your CSS file is in the src folder!

export default function App() {
 

  const [isLightMode, setIsLightMode] = useState(false);

  const [likes, setLikes] = useState(0);
  
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Mio-w</div>

        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a></li>
          <li><a href="#profile" onClick={(e) => handleSmoothScroll(e, 'profile')}>Profile</a></li>
          <li><a href="#hobbies" onClick={(e) => handleSmoothScroll(e, 'hobbies')}>Hobbies</a></li>
          <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a></li>
        </ul>

        <div className="nav-icons">
          {}
          <span 
            id="themeToggle" 
            onClick={() => setIsLightMode(!isLightMode)}
            style={{ cursor: 'pointer' }}
          >
            {isLightMode ? '☀️' : '🌙'}
          </span>
          <span>⚙️</span>
        </div>
      </nav>

      <section id="home" className="section hero">
        <div className="profile-container">
          <img src="Images/Nigen.jpg" className="profile-pic" alt="Nigen" />
          <h1>Nigen Andrei S. Bustamante</h1>
          <p>A BSIT student currently enrolled in STI San Jose Del Monte</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="profile" className="section">
        <h2>Profile</h2>
        <br /> <br />
        <p>
          I am Nigen Andrei S. Bustamante, an IT student who is very passionate when 
          it comes to things like writing, reading, and playing various medias. 
          I used to run a YouTube channel where I show off my gameplay and whatlike to various games. 
          Outside of that, I do reviews on shows, books, and games that I've played/read/watched. 
          I am also quite intermediate in programming languages like Java, C#, and I have a 
          strong interest on CyberSecurity currently.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="cards">
          <div className="card">
            <img src="Images/ManagementSystem.png" alt="Hospital Management System" className="card-img" />

            <h3>Hospital Management System | Console Based</h3>
            
            {}
            <button 
              style={{ padding: '5px 10px', marginTop: '10px', cursor: 'pointer', borderRadius: '5px' }}
              onClick={() => setLikes(likes + 1)}
            >
              ❤️ {likes} Likes
            </button>

            <br /> <br />
            <p>
              The console based hospital management system is a software that I made as a final project for my Object-Oriented Programming (OOP) class during my second year in college. It's a simple console based application that allows users to manage hospital operations like patient records, appointments, and billing.
            </p>
          </div>

          <div className="card">
            <img src="Images/Drawing.png" alt="HTML Drawing" className="card-img" />

            <h3>An HTML Drawing | HTML Only</h3>
            <br /> <br />
            <p>
              The HTML Drawing is a fun activity given by my professor in Web Systems and Technologies class which sole purpose is to draw a house using only HTML elements and tags.
            </p>
          </div>
        </div>
      </section>

      {/* HOBBIES */}
      <section id="hobbies" className="section">
        <h2>Hobbies</h2>
        <div className="cards">
          <div className="card">
            <img src="Images/Playing.png" alt="Media Hobby" className="card-img" />

            <h3>Watching/Reading/Playing Various Medias</h3>
            <br /> <br />
            <p>
              I mostly watch, read, and play various media like Anime, Manga, and video games (gacha games). This is my main hobby and what I spend most of my free time on.
            </p>
          </div>

          <div className="card">
            <img src="Images/Writing.png" alt="Writing Hobby" className="card-img" />

            <h3>Writing</h3>
            <br /> <br />
            <p>
              I love reviewing shows, books, and games I have experienced. I also keep a journal of my thoughts through social media, mostly about Anime, Manga, and Games.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>You can see me at:</p>

        <div className="socials">
          <a href="https://www.facebook.com/nigenandrei.saldobustamante/">
            <img src="Images/facebookIcon.png" alt="Facebook" style={{ width: '40px', height: '40px' }} />
          </a>

          <a href="https://www.youtube.com/@mio_www">
            <img src="Images/youtubeIcon.png" alt="YouTube" style={{ width: '40px', height: '40px' }} />
          </a>
        </div>
      </footer>
    </>
  );
}