import React, { useEffect, useRef, useState } from 'react'

function FadeIn({ children, delay = 0, duration = 500, threshold = 0.1 }) {

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    if (el) {
      observer.observe(el);
    }
    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [threshold, isVisible]);

  return (
    <div 
      className={ isVisible ? 'animate-fadeIn' : 'opacity-0' }
      ref={elementRef}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: `${duration}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn