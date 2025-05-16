import React, { useState, useEffect } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const FlipClock = () => {
  const [digitStyle, setDigitStyle] = useState({});
  const [labelFontSize, setLabelFontSize] = useState(14);

  useEffect(() => {
    const updateStyles = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile
        setDigitStyle({
          width: 35,
          height: 50,
          fontSize: 24,
          backgroundColor: '#1a1a1a',
          borderRadius: 6,
        });
        setLabelFontSize(10);
      } else if (width < 1024) {
        // Tablet
        setDigitStyle({
          width: 45,
          height: 60,
          fontSize: 30,
          backgroundColor: '#1a1a1a',
          borderRadius: 6,
        });
        setLabelFontSize(12);
      } else {
        // Desktop
        setDigitStyle({
          width: 60,
          height: 80,
          fontSize: 50,
          fontWeight: 700,
          backgroundColor: '#1a1a1a',
          borderRadius: 8,
        });
        setLabelFontSize(14);
      }
    };

    updateStyles();
    window.addEventListener('resize', updateStyles);
    return () => window.removeEventListener('resize', updateStyles);
  }, []);

  const targetDate = new Date(new Date().getFullYear(), 10, 25); // Nov 25

  return (
    <div className="md:w-full md:p-2 rounded-xl flex items-center justify-center">
      <FlipClockCountdown
        to={targetDate.getTime()}
        labels={['Days', 'Hours', 'Minutes', 'Seconds']}
        labelStyle={{
          fontSize: labelFontSize,
          fontWeight: 500,
          textTransform: 'uppercase',
          color: '#fff',
          marginTop: 16,
        }}
        digitBlockStyle={digitStyle}
        dividerStyle={{ color: '#fff' }}
      />
    </div>
  );
};

export default FlipClock;
