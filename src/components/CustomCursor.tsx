import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const outlineRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if touch device
    const checkTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(checkTouch);

    if (checkTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .project-card'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation loop for smooth outline
    const animate = () => {
      outlineRef.current.x +=
        (position.x - outlineRef.current.x) * 0.15;
      outlineRef.current.y +=
        (position.y - outlineRef.current.y) * 0.15;
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position]);

  // Re-attach listeners when DOM changes
  useEffect(() => {
    if (isTouchDevice) return;

    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, .project-card'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed pointer-events-none z-[9999] w-2 h-2 bg-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      {/* Outline */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full -translate-x-1/2 -translate-y-1/2 border-2 transition-all duration-200 ${
          isHovering
            ? 'w-16 h-16 border-cyan-400'
            : 'w-10 h-10 border-indigo-500/50'
        }`}
        style={{
          left: outlineRef.current.x || position.x,
          top: outlineRef.current.y || position.y,
        }}
      />
    </>
  );
}
