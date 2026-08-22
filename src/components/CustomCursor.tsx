import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../hooks/useMediaQuery';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<'default' | 'hovering' | 'project' | 'link'>('default');
  const [cursorText, setCursorText] = useState('');
  const isMobile = useIsMobile();
  const pos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="pointer"]');
      const projectCard = target.closest('[data-cursor="project"]');
      const externalLink = target.closest('a[href^="http"], a[target="_blank"], [data-cursor="link"]');

      if (projectCard) {
        setCursorState('project');
        setCursorText('VIEW');
      } else if (externalLink) {
        setCursorState('link');
        setCursorText('OPEN');
      } else if (interactive) {
        setCursorState('hovering');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const update = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    rafId.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const className = [
    'custom-cursor',
    cursorState === 'hovering' && 'hovering',
    cursorState === 'project' && 'project-hover',
    cursorState === 'link' && 'link-hover',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={cursorRef} className={className}>
      {cursorText && <span className="cursor-text">{cursorText}</span>}
    </div>
  );
}
