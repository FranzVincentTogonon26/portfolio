import { useEffect, useState } from "react"

export const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {

        const handleScroll = () => {

            const scrollPostion = window.scrollY + offset;

            // Find the currrent section
            for( let i = sectionIds.length - 1; i >= 0; i-- ){
                
                const section = document.getElementById(sectionIds[i]);

                // console.log(section)

                if(section){
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if(scrollPostion >= sectionTop && scrollPostion < sectionTop + sectionHeight){
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [ sectionIds, offset ]);

    return activeSection;

};


// Smooth scroll to a section

export const scrollToSection = (sectionIds, offset = 80 ) => {
    const section = document.getElementById(sectionIds);

    if(section){
        const top = section.offsetTop - offset;
        window.scrollTo({
            top,
            behavior: 'smooth'
        })
    }

};