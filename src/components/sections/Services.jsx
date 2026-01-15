import React from 'react'
import * as Icons from 'lucide-react'
import { Wrench } from "lucide-react"
import FadeIn from '../animations/FadeIn';
import { services } from "../../data/service"

function Services() {

     

  return (
    <section id='services' className='relative py-20 bg-black overflow-hidden'>

        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opcaity-20 rounded-full blur-3xl' />
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opcaity-20 rounded-full blur-3xl' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl' />
        </div>

        <div
            className='absolute inset-0 opacity-[0.03]'
            style={{
                backgroundImage : 
                `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px),
                `,
                backgroundSize: ' 30px 30px '
            }}
        />

        <div className=''>

            <FadeIn delay={0} >
                <div className=''>

                    <div className=''>
                        <Wrench className='' />
                        <span className=''>
                            What I Offer
                        </span>
                    </div>
                    <h2 className=''>
                        Built for innovation. Designed for results.
                    </h2>
                    <p className=''>
                        Comprehensive solutiuons to transform your ideas into exceptional digital experences.
                    </p>

                </div>
            </FadeIn>

            <div className=''>
                {services.slice(2).map((service, index) => {

                    const IconComponenet = Icons[service.icon] || Icons.Code2;

                    return (
                        <FadeIn delay={300 + index * 100} key={service.id} >
                            <div className=''>

                                <div className=''>
                                    <div className=''>
                                        <IconComponenet className="" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className=''>
                                        {service.title}
                                    </h3>
                                    <p className=''>
                                        {service.description}
                                    </p>
                                </div>

                                <div className='' />

                            </div>
                        </FadeIn>
                    )

                })}
            </div>


        </div>


    </section>
  )
}

export default Services