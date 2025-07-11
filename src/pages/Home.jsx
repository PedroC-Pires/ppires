import React from 'react';
import '../style/style.css';
import '../style/style_alt.css';
import { useEffect, useState } from 'react';

const Home = () => {
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
      <header>
        <button onClick={() => window.location.href = '/'}>Home</button>
        <div className="dropdown">
          <button className="dropbtn">Áreas do Conhecimento</button>
          <div className="dropdown-content">
            <a href="/humanas">Humanas</a>
            <a href="/linguagens">Linguagens</a>
            <a href="/matematica">Matemática</a>
            <a href="/natureza">Natureza</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Técnico</button>
          <div className="dropdown-content">
            <a href="/banco-de-dados">Banco de Dados</a>
            <a href="/desenvolvimento-de-sistemas">Desenvolvimento de Sistemas</a>
            <a href="/implantacao-de-sistemas">Implantação e Manutenção de Sistemas</a>
            <a href="/modelagem-de-sistemas">Modelagem de Sistemas</a>
            <a href="/programacao-de-aplicativos">Programação de aplicativos</a>
            <a href="/sa">S.A.</a>
            <a href="/teste-de-sistemas">Teste de Sistemas</a>
          </div>
        </div>
        <button onClick={() => window.location.href = '/ppe'}>PPE</button>
        <img
          src={lightTheme ? '/img/moonicon.png' : '/img/sunicon.png'}
          width="24px"
          id="themeIcon"
          alt="Theme Icon"
          onClick={themeSwitch}
          style={{ cursor: 'pointer' }}
        />
      </header>
      <main>
        <section>
          <h1 style={{ textAlign: 'center', fontSize: '2rem' }}><span style={{ fontSize: '2.55rem' }}>Portfolio</span><br />Pedro Pires</h1>
          <h1>Sobre mim</h1>
          <p>Meu nome é Pedro Pires, tenho 18 anos, atualmente sou estudante do ensino médio, e estou cursando o curso técnico integrado de desenvolvimento de sistemas da Escola SESI - Florianópolis.</p>
          <p>Gosto de desenvolver editar vídeos, escutar músicas e jogar, tenho conhecimentos de desenvolvimento tanto Front-end quanto Back-end (tenho preferência pelo Front-end), também tenho conhecimentos de pacote Adobe (Photoshop, Illustrator e Premiere Pro), e também pacote office (Word, Excel, Powerpoint e Access)</p>
          <h1>Cronograma</h1>
          <div style={{ overflowX: 'auto', width: '100%' }}>
            <table>
              <thead>
                <tr>
                  <th>Horário</th>
                  <th>Segunda</th>
                  <th>Terça</th>
                  <th>Quarta</th>
                  <th>Quinta</th>
                  <th>Sexta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7:35 - 12:50</td>
                  <td>Aula</td>
                  <td>Aula</td>
                  <td>Aula</td>
                  <td>Aula</td>
                  <td>Aula</td>
                </tr>
                <tr>
                  <td>12:50 - 17:00</td>
                  <td>Finalizar atividades e descançar</td>
                  <td>Finalizar atividades e descançar</td>
                  <td>Finalizar atividades e descançar</td>
                  <td>Voleibol</td>
                  <td>Finalizar atividades e descançar</td>
                </tr>
                <tr>
                  <td>17:00 - 20:00</td>
                  <td>Tempo livre</td>
                  <td>Tempo livre</td>
                  <td>Tempo livre</td>
                  <td>Tempo livre</td>
                  <td>Tempo livre</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1>Currículo</h1>
          <img onDoubleClick={() => window.open('/pdf/CV Pedro Pires.pdf','_blank')} src="/img/CV Pedro Pires.png" alt="Curriculum Vitae de Pedro Pires" className="preview" />
        </section>
        <section>
          <h1>Portfolios passados</h1>
          <p>Aqui estão os portfolios realizados por mim nos anos passados (2022 e 2023), ambos foram feitos no Google Sites.</p>
          <div className="container">
            <div>
              <a href="https://sites.google.com/estudante.sesisenai.org.br/portfolio2022pedropires?usp=sharing" target="_blank" rel="noopener noreferrer">
                <h2>Portfolio 2022</h2>
              </a>
            </div>
            <div>
              <a href="https://sites.google.com/estudante.sesisenai.org.br/portfoliopcp/in%C3%ADcio?authuser=0" target="_blank" rel="noopener noreferrer">
                <h2>Portfolio 2023</h2>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <h1>Contato e redes</h1>
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

export default Home; 