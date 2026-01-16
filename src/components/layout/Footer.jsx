import { Dribbble, Github, Heart, Linkedin, Mail, MapPin, Twitter } from 'lucide-react'
import React from 'react'
import FadeIn from '../animations/FadeIn';
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants';


function Footer() {

  const socialIcons = {
    github:Github,
    linkedin:Linkedin,
    twitter:Twitter,
    dribble:Dribbble
  };

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">

        <div className='absolute inset overflow-hidden'>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl' />
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl' />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <FadeIn delay={0} >

              <div>
                <h3 className="text-3xl font-bold bg-linear-to-r from-primary/80 via-primary/ to-primary/80 bg-clip-text text-transparent mb-4">{PERSONAL_INFO.name.split(' ')[0]}</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">{PERSONAL_INFO.tagline}</p>
              </div>

              <div className="space-y-3">

                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className='group flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300'
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className='w-4 h-4 text-primary' />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                <div className='flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl'>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className='w-4 h-4 text-primary' />
                  </div>
                  <span className="text-white/70 text-sm">
                    {PERSONAL_INFO.location}
                  </span>
                </div>

              </div>

            </FadeIn>
          </div>

          <FadeIn delay={300} >
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-white/50 text-sm">
                  {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
                </p>
                <p className="flex items-center gap-2 text-white/50 text-sm">
                  Built with <Heart className='w-4 h-4 text-primary fill-primary animate-pulse' /> using React.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>


    </footer>
  )
}

export default Footer