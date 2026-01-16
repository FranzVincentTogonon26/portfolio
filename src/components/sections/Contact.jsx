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
    <section id='contact' className=''> 

        <div className=''>
            <div className='' />
            <div className='' />
            <div className='' />
        </div>

        <div className=''> 

            <FadeIn delay={0} >
                <div className=''>
                    <div className=''>
                        <MessageSquare className='' />
                        <span className="">Get In Touch</span>
                        <h2 className=''>Let work together</h2>
                        <div className="p">Have a project in mind? Let discuss how we can bring</div>
                    </div>
                </div>
            </FadeIn>

            <div className="">
                <FadeIn delay={100} >
                    <div className="">
                        <form onSubmit={handleSubmit} className="">

                            <div>
                                <label htmlFor="name" className="">Name</label>
                                <input 
                                    type="text" 
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className=''
                                    placeholder='Your name'
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="">Email</label>
                                <input 
                                    type="email" 
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='your.email@example.com'
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="">Message</label>
                                <textare 
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder='Tell me about your project'
                                />
                            </div>

                            <button className="" type='submit'>
                                <span>Send Message</span>
                                <Send className='' />
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