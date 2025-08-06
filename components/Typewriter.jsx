import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50, highlightText, highlightClass }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  const renderText = () => {
    if (!highlightText || !highlightClass || !displayedText.includes(highlightText)) {
      return displayedText;
    }

    const parts = displayedText.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className={highlightClass}>{highlightText}</span>
        {parts.slice(1).join(highlightText)}
      </>
    );
  };

  return <span>{renderText()}</span>;
};

export default Typewriter;