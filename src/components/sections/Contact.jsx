import React, { useState } from 'react'
import FadeIn from '../animations/FadeIn'
import { Github, Linkedin, MessageSquare, Send, Twitter } from "lucide-react"

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name || !formData.email || !formData.message){
            setStatus({
                type: 'error',
                message: 'Please fill in all fields'
            });
            return;
        }

        const emailRegex = /^[\^s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(formData.email)){
            setStatus({
                type: 'error',
                message: 'Please enater a valid Email Address'
            });
            return;
        }

        setStatus({
            type: 'success',
            message: 'Message sent successfully..'
        });
        setFormData({
            name: '',
            email: '',
            message: ''
        });

        setTimeout(() => 
            setStatus({
                type: '',
                message: ''
            }), 5000
        );

    }

    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
        twitter: Twitter
    };


  return (
    <section id='contact' className='relative py-20 bg-black overflow-hidden'> 

        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl' />
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl' />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'> 

            <FadeIn delay={0} >
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                        <MessageSquare className='w-4 h-4 text-primary' />
                        <span className="text-sm text-primary font-medium tracking-wider uppercase">Get In Touch</span>
                    </div>
                    <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>Let work together</h2>
                    <div className="text-lg text-white/60 max-w-2xl mx-auto">Have a project in mind? Let discuss how we can bring your ideas to life.</div>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12">
                <FadeIn delay={100} >
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                                    placeholder='Your name'
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300'
                                    placeholder='your.email@example.com'
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none'
                                    rows={5}
                                    placeholder='Tell me about your project'
                                />
                            </div>

                            <button className="w-full px-6 py-3 bg-linear-to-r from-primary/10 to-primary text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group" type='submit'>
                                <span>Send Message</span>
                                <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                            </button>

                            {
                                status.message && (
                                    <div className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-500' : 'bg-red-500/10 border border-red-500/20 text-red-500' }`}>
                                        {status.message}
                                    </div>
                                )
                            }

                        </form>
                    </div>
                </FadeIn>
            </div>

        </div>

    </section>
  )
}

export default Contact