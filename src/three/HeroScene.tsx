import { useState } from 'react';

interface HeroSceneProps {
  reducedMotion?: boolean;
  isMobile?: boolean;
}

export function HeroScene({ reducedMotion = false, isMobile = false }: HeroSceneProps) {
  const [loaded, setLoaded] = useState(false);

  if (isMobile || reducedMotion) {
    // Highly performant CSS space visual fallback for mobile/low-end devices
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="cosmic-orbit-fallback" />
        <style>{`
          .cosmic-orbit-fallback {
            width: 120px;
            height: 120px;
            border: 1.5px solid rgba(124, 92, 252, 0.25);
            border-top-color: #7C5CFC;
            border-radius: 50%;
            animation: fallbackSpin 4s linear infinite;
            box-shadow: 0 0 30px rgba(124, 92, 252, 0.1);
          }
          @keyframes fallbackSpin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'visible', // Let the wider iframe bleed to prevent clipping
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#9CA3AF',
            fontSize: '11px',
            letterSpacing: '0.15em',
            fontWeight: 500,
          }}
        >
          INITIALIZING 3D ENVIRONMENT...
        </div>
      )}
      <div
        style={{
          width: '135%', // Widen frame to prevent horizontal camera clipping
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          // Shift left to prevent left clipping and scale down to fit the grid
          transform: 'translateX(-15%) scale(0.8)',
          mixBlendMode: 'screen', // Makes the black background transparent
        }}
      >
        <iframe
          src="https://my.spline.design/interactiveworkplace-3JiABTX285JClkzDrUveSkfc/"
          frameBorder="0"
          width="100%"
          height="100%"
          onLoad={() => setLoaded(true)}
          style={{
            pointerEvents: 'auto',
            background: 'transparent',
            // Adjusted contrast and brightness to clamp the dark-inverted background to pure #000000
            filter: 'invert(0.92) hue-rotate(195deg) brightness(0.72) contrast(1.6)',
          }}
          title="Interactive 3D Workspace"
        />
      </div>
    </div>
  );
}




