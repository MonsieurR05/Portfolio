// TextReveal.js

import React, { useEffect } from 'react';
import Baffle from 'baffle';

const TextReveal = ({ revealText, className }) => {
  useEffect(() => {
    const text = Baffle(".data");
    text.set({
      characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
      speed: 200,
    });
    text.start();
    text.reveal(4000);

    return () => text.stop();
  }, []);

  return (
    <div className={`data ${className || ''}`}>
      {revealText}
    </div>
  );
};

export default TextReveal;
