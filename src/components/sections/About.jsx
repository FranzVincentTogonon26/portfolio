import React from 'react'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import FadeIn from '../animations/FadeIn'
import { Code2, Download, Sparkles } from 'lucide-react'
import { ABOUT_STATS, PERSONAL_INFO } from '../../utils/constants'

function About() {
  return (
    <section id='about' className='relative py-20 bg-black overflow-hidden'>

      <RadialGradientBackground variant='about' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* main Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
          {/* Left Column - Content */}
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-8'>

              <FadeIn delay={60}>
                <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10'>
                  <Code2 className='w-4 h-4 text-primary' />
                  <span className='text-sm text-primary font-medium'>Full Stack Developers</span>
                  <Sparkles className='w-4 h-4 text-primary' />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>
                    Crafting Digital Experiences That matter
                </h2>
              </FadeIn>

              <FadeIn delay={200} >
                <div className='flex flex-col gap-4'>
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p key={index} className='text-base text-white/70 leading-relaxed'>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={300} >
                <div className='grid grid-cols-3 gap-8'>
                  {ABOUT_STATS.map((stat, index) => (
                    <div key={index} className='relative'>
                      <div className='absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full'></div>
                      <div className='text-3xl font-normal text-white mb-2 font-mono'>
                        {stat.value}
                      </div>
                      <p className='text-sm text-white/60 leading-snug'>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={400} >
                <button
                  className='inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group'
                  onClick={() => window.open(PERSONAL_INFO.resume)}
                >
                  <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300' />
                  Download Resume
                </button>
              </FadeIn>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About