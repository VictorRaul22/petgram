import { useState, useRef, useEffect } from "react";

export function useNearScreen() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    Promise.resolve(
      // cargar solo cuando necesita el polify
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver(
        (entries) => {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0,
        }
      );
      observer.observe(ref.current);
    });
  }, [ref]);
  return [show, ref];
}
