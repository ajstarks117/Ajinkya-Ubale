import { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const steps = [
      { progress: 30, status: '3D Environment', delay: 300 },
      { progress: 60, status: 'Projects', delay: 500 },
      { progress: 85, status: 'Components', delay: 400 },
      { progress: 100, status: 'Ready', delay: 300 },
    ];

    let timer: number;
    let step = 0;

    const advance = () => {
      if (step < steps.length) {
        const s = steps[step];
        setProgress(s.progress);
        setStatus(s.status);
        step++;
        timer = window.setTimeout(advance, s.delay);
      } else {
        // Delay before hiding
        timer = window.setTimeout(() => {
          setHidden(true);
          setTimeout(onComplete, 500);
        }, 400);
      }
    };

    timer = window.setTimeout(advance, 200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${hidden ? 'hidden' : ''}`}>
      <div className="loader-logo">Ajinkya Ubale</div>
      <div className="loader-bar-container">
        <div className="loader-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="loader-status">{status}</div>
    </div>
  );
}
