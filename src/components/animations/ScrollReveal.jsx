import React from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const ScrollReveal = (
    children,
    animation = 'fadeUp',
    delay = 0,
    duration = 700
) => {

  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const animationClasses = {
    fadeUp: 'opacity-0 translate-y-8',
    fadeIn: 'opacity-0',
    slideleft: 'opacity-0 -translate-x-12',
    slideRight: 'opacity-0 translate-x-12',
    scaleIn: 'opacity-0 scale- 90'
  };

  const visibleClasses = 'opcaity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      className={`transition-all ease-out 
        ${ isVisible ? visibleClasses : animationClasses[animation] }
      `}
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )


}

export default ScrollReveal