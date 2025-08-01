import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ lightTheme, themeSwitch }) => {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigate('/')}>About me</button>
      <button onClick={() => navigate('/projects')}>Projects</button>
      <img
        src={lightTheme ? '/img/moonicon.png' : '/img/sunicon.png'}
        width="24px"
        id="themeIcon"
        alt="Theme Icon"
        onClick={themeSwitch}
        style={{ cursor: 'pointer' }}
      />
    </header>
  );
};

export default Header; 