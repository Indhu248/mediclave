import React, { useState, useEffect } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { Weight } from 'lucide-react';

const FlipClock = () => {
  const [digitStyle, setDigitStyle] = useState({});

  // Responsive digit style
  useEffect(() => {
    const updateDigitStyle = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDigitStyle({
          width: 40,
          height: 60,
          fontSize: 30,
          backgroundColor: '#1a1a1a',
          borderRadius: 6,
        });
      } else if (width < 1024) {
        setDigitStyle({
          width: 50,
          height: 60,
          fontSize: 30,
          backgroundColor: '#1a1a1a',
          borderRadius: 6,
        });
      } else {
        setDigitStyle({
          width: 50,
          height: 60,
          fontSize: 50,
          fontWeight: 700,
          backgroundColor: '#1a1a1a',
          borderRadius: 8,
        });
      }
    };

    updateDigitStyle();
    window.addEventListener('resize', updateDigitStyle);
    return () => window.removeEventListener('resize', updateDigitStyle);
  }, []);

  // Set target date: November 25th of current year
  const targetDate = new Date(new Date().getFullYear(), 10, 25); // Month is 0-indexed (10 = November)

  return (
    <div className="w-full max-w-fit px-2 py-2 rounded-xl flex items-center justify-center">
      <FlipClockCountdown
        to={targetDate.getTime()}
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        labelStyle={{
          fontSize: 14,
          fontWeight: 500,
          textTransform: 'uppercase',
          color: '#fff',
          marginTop: 20,
        }}
        digitBlockStyle={digitStyle}
        dividerStyle={{ color: '#fff'}}
      />
    </div>
  );
};

export default FlipClock;

