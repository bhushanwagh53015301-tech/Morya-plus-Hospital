import { useEffect, useRef, useState } from "react";

export function Counter({ value, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();

            const step = (time) => {
              const progress = Math.min((time - start) / duration, 1);
              const eased = progress < 0.2 ? progress / 0.2 : 1;
              setCount(Math.round(value * (0.2 + 0.8 * progress) * eased));

              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(value);
              }
            };

            window.requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [duration, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
