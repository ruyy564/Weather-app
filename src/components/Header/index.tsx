import React from 'react';

import css from './index.module.css';

const weather =
  '<div> Find out how to dress according to the weather </div>'.split(' ');

const Header = () => {
  return (
    <header className={css.root}>
      <h1>Weather app</h1>
      <h2>
        {weather.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h2>
    </header>
  );
};

export default Header;
