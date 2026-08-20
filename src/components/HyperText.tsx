import { useEffect, useRef, useState, useCallback } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

interface HyperTextProps {
  text: string;
  className?: string;
  duration?: number;
}

export const HyperText: React.FC<HyperTextProps> = ({
  text,
  className = '',
  duration = 600,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const iterationRef = useRef(0);

  const scramble = useCallback(() => {
    iterationRef.current = 0;
    const steps = Math.ceil(duration / 30);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      iterationRef.current += 1;

      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < Math.floor((iterationRef.current / steps) * text.length)) {
              return char;
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join('')
      );

      if (iterationRef.current >= steps) {
        clearInterval(intervalRef.current!);
        setDisplayText(text);
      }
    }, 30);
  }, [text, duration]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={`inline-block cursor-pointer font-jetbrains tracking-widest ${className}`}
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  );
};
