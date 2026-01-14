import React, { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../utils/constants';
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy';


function Navbar() {

  const [isMenuopen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activaSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);

  },[]);


  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  }


  return (
    <div >Navbar</div>
  )
}

export default Navbar 