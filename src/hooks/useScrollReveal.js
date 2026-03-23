import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a container ref.
 * Every direct child with [data-reveal] gets the class "revealed"
 * once it crosses the threshold, triggering the CSS fade-up animation.
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
