import { SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export const PERSONAL_INFO = {
    name: "Franz",
    title: "React Developer & UI/UX Enthusiast",
    email: "franz@gmail.com",
    location: "San Francisco, CA",
    tagline: "Creating seamless web experiences",
    resume: "https://example.com/resume.pdf",
    bio: [
        "Passionate about crafting engaging user interfaces and experiences.",
        "Skilled in React, JavaScript, and modern web technologies.",
        "Committed to continuous learning and professional growth."
    ]
};

export const SOCIAL_LINKS = {
    github: "https://github.com/franzdev",
    linkedin: "https://linkedin.com/in/franzdev",
    twitter: "https://twitter.com/franzdev",
    dribble: "https://dribbble.com/franzdev"
};

export const STATS = [
    { label: "Year Experience", value: "2+" },
    { label: "Projects Ccompleted", value: "2+" },
    { label: "Client Satisfaction", value: "2+" },
    { label: "Technologies", value: "2+" },
];

export const ABOUT_STATS = [
    { label: "Happy Clients", value: "45+" },
    { label: "Code Commits", value: "2.5K" },
    { label: "Git Stars", value: "45+" }
];

export const NAV_LINKS = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contacts" }
];

export const SKILLS = [
    { name: 'React.js', icon: SiReact, color: '#61DAFB'},
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000'},
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6'},
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4'},
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933'},
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248'}
];
