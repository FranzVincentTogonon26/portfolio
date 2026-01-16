import React, { useRef, useState } from 'react'
import { testimonials } from '../../data/testimonials'
import FadeIn from '../animations/FadeIn'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

function Testimonials() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const scrollToIndex = (index) => {
        setCurrentIndex(index);
        if(scrollContainerRef.current){
            const cardWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollo({
                left: cardWidth * index,
                behavior: 'smooth'
            })
        }
    };

    const nextTestimonial = () => {
        const newIndex = (currentIndex + 1) % testimonials.length;
        scrollToIndex(newIndex);
    }

    const prevTestimonial = () => {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        scrollToIndex(newIndex);
    }

    const testimonialStats = [
        { value: '3x', label: 'Faster Delivery' },
        { value: '95%', label: 'Client Satisfaction' },
        { value: '100%', label: 'On-Time Delivery' },
        { value: '5*', label: 'Average Rating' },
    ];

    
  return (
    <section id='testimonials' className='relative py-20 bg-black overflow-hidden'>

        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-90 rounded-full blur-3xl' />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            <FadeIn delay={0} >
                <div className='text-center mb-16'>

                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                        <Quote className='w-4 h-4 text-primary' />
                        <span className='text-sm rext-primary font-medium tracking-wider uppercase'>Testimonials</span>
                    </div>
                    <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4 max-w-xl mx-auto'>
                        Trusted by forwad-thinking teams
                    </h2>
                    <p className='text-lg text-white/60 max-w-xl mx-auto'>
                        Empowering clients with design-driven, high-quality solutions 
                    </p>

                </div>
            </FadeIn>
            <FadeIn delay={100} >
                <div className='relative'>

                     <div
                        ref={scrollContainerRef}
                        className='overflow-x-hidden scroll-smooth'
                        style={{
                            scrollSnapType: 'x mandatory'
                        }}
                     >
                        <div className='flex'>
                            {testimonials.map((testimonial, index) => (
                                <div
                                    className='w-full shrink-0 px-4'
                                    key={testimonial.id}
                                    style={{
                                        scrollSnapAlign: 'start'
                                    }}
                                >
                                    <div className='max-w-4xl mx-auto'>
                                        <div className='flex flex-col md:flex-row gap-6 items-stretch'>

                                            {/* Image Section */}
                                            <div className=''>
                                                <div className=''>

                                                    <img src={testimonial.image} alt={testimonial.name} className='' />
                                                    {/* Stat Badge Overlay */}
                                                    <div className=''>
                                                        <div className=''>
                                                            <div className=''>

                                                                <div className=''>
                                                                    { testimonialStats[index]?.value }
                                                                </div>
                                                                <div className=''>
                                                                    {testimonialStats[index]?.label}
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className=''>

                                                {/* Quote */}
                                                <div className=''>
                                                    <Quote className='' />
                                                    <p className=''>
                                                        "{testimonial.feedback}"
                                                    </p>
                                                </div>

                                                <div className=''>
                                                    <div>
                                                        <div className=''>
                                                            {testimonial.name}
                                                        </div>
                                                        <div className=''>
                                                            {testimonial.role}, {testimonial.company}
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} className='' />
                                                        ))}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>

                     <div className=''>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={`transition-all duration-300 rounded-fuk=ll ${ index === currentIndex ? 'bg-white w-6 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/50' }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                     </div>

                    <button
                        className=''
                        onClick={prevTestimonial}
                        aria-label='Previous Testimonials'
                    >
                        <ChevronLeft className='' />
                    </button>

                    <button
                        className=''
                        onClick={nextTestimonial}
                        aria-label='Next Testimonials'
                    >
                        <ChevronRight className='' />
                    </button>

                </div>
            </FadeIn>

        </div>

    </section>
  )
}

export default Testimonials