import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check for touch devices
    if ('ontouchstart' in window) {
      cursor.style.display = 'none';
      return;
    }

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.15;
      curY += (mouseY - curY) * 0.15;
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => cursor.classList.add('hovering');
    const onLeave = () => cursor.classList.remove('hovering');

    // Attach hover effects on interactive elements
    const attachHover = () => {
      document.querySelectorAll('a, button, .card, .skill-chip, .project-card').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(animate);

    // Attach initial and observe DOM changes
    attachHover();
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
