import React from 'react';
import '../style/style.css';
import '../style/style_alt.css';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

const Projects = () => {
  const [lightTheme, setLightTheme] = useState(() => {
    const stored = sessionStorage.getItem('lightTheme');
    return stored === null ? true : stored === 'true';
  });

  useEffect(() => {
    // Background movement logic
    function bgScroll() {
      const htmlTag = document.documentElement;
      const scrollHeight = htmlTag.offsetHeight - htmlTag.clientHeight;
      const scrollPos = window.pageYOffset;
      const scrollPosPercentage = scrollHeight > 0 ? (100 * scrollPos / scrollHeight) : 0;
      document.body.style.backgroundPositionY = scrollPosPercentage + '%';
      document.body.style.backgroundPositionX = scrollPosPercentage + '%';
      requestAnimationFrame(bgScroll);
    }
    bgScroll();
  }, []);

  useEffect(() => {
    // Theme switching logic
    sessionStorage.setItem('lightTheme', lightTheme);
    // Dynamically update background image
    document.body.style.backgroundImage = lightTheme
      ? 'url("/img/background/bg_nighttime.png")'
      : 'url("/img/background/bg_daytime.png")';
    // Dynamically update CSS variables on :root
    const root = document.documentElement;
    if (lightTheme) {
      // Dark theme (from style.css)
      root.style.setProperty('--shadow1', '#bebebe46');
      root.style.setProperty('--shadow2', '#ffffff46');
      root.style.setProperty('--bgcolor', '#ccccccd0');
      root.style.setProperty('--darkblue', '#4577a0');
      root.style.setProperty('--lightblue', '#AFC1D0');
      root.style.setProperty('--white', '#ffffff');
      root.style.setProperty('--black', '#000000');
    } else {
      // Light theme (from style_alt.css)
      root.style.setProperty('--shadow1', '#41414156');
      root.style.setProperty('--shadow2', '#00000056');
      root.style.setProperty('--bgcolor', '#333333d8');
      root.style.setProperty('--darkblue', '#AFC1D0');
      root.style.setProperty('--lightblue', '#4577a0');
      root.style.setProperty('--white', '#000000');
      root.style.setProperty('--black', '#ffffff');
    }
  }, [lightTheme]);

  const themeSwitch = () => {
    setLightTheme((prev) => !prev);
  };

  return (
    <div className="centered-content">
      <Header lightTheme={lightTheme} themeSwitch={themeSwitch} />
      <main>
        <section>
          <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>My Projects</h1>
          <p>Here are some of the projects I've worked on:</p>
          
          <h2>Portfolio Website</h2>
          <p>This portfolio website built with React and Vite. Features include:</p>
          <ul>
            <li>Dark/Light theme switching</li>
            <li>Responsive design</li>
            <li>Netlify deployment</li>
            <li>Modern UI with glassmorphism effects</li>
          </ul>

          <h2>More Projects Coming Soon</h2>
          <p>I'm currently working on several new projects that will be added here soon.</p>
          
          <h2>Technologies I Use</h2>
          <ul>
            <li>React & React Router</li>
            <li>Node.js & Express</li>
            <li>JavaScript & TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
            <li>Vite & Webpack</li>
          </ul>
        </section>
      </main>
      <footer>
        <h1>Contact me</h1>
        <div>
          <div>
            <h3>Whatsapp</h3>
            <a href="https://wa.me/+5548984948464" target="_blank" rel="noopener noreferrer"><p>(48) 98494-8464</p><br /></a>
          </div>
          <div>
            <h3>E-mail</h3>
            <a href="mailto:pedrocpires25@gmail.com" target="_blank" rel="noopener noreferrer"><p>pedrocpires25<br />@gmail.com</p></a>
          </div>
          <div>
            <h3>Github</h3>
            <a href="https://github.com/PedroC-Pires" target="_blank" rel="noopener noreferrer"><p>PedroC-Pires</p><br /></a>
          </div>
          <div>
            <h3>Linkedin</h3>
            <a href="https://www.linkedin.com/in/pedro-pires-5210561aa/" target="_blank" rel="noopener noreferrer"><p>pedro-pires</p><br /></a>
          </div>
          <div>
            <h3>Instagram</h3>
            <a href="https://www.instagram.com/pcpiress/?hl=pt-br" target="_blank" rel="noopener noreferrer"><p>@pcpiress</p><br /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects; 