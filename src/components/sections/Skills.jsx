import React from 'react'
import { skills } from '../../data/skill'

function Skills() {

    // Categories Skills
    const skillCategories = {
        'Frontend Development': [
            skills.find( s => s.name === 'React.js'),
            skills.find( s => s.name === 'JavaScript'),
            skills.find( s => s.name === 'TypeScript'),
            skills.find( s => s.name === 'Next.js'),
            skills.find( s => s.name === 'Tailwind CSS'),
            skills.find( s => s.name === 'Redux')
        ].filter(Boolean),
        'Backend & APIs': [
            skills.find( s => s.name === 'Node.js' ),
            skills.find( s => s.name === 'REST APIs' )
        ].filter(Boolean),
        'Tools & Others': [
            skills.find( s => s.name === 'Git & GitHub' ),
            skills.find( s => s.name === 'Responsive Design' ),
            skills.find( s => s.name === 'Figma' ),
            skills.find( s => s.name === 'Vite' )
        ].filter(Boolean)
    };

    // Get proficiency persentage
    const getProficiencyLevel = (level) => {
        const levels = {
            'Expert': 95,
            'Advanced': 80,
            'Intermediate': 65
        };
        return levels[level] || 50;
    };

    // Get level Color
    const getLevelColor = (level) => {
        const colors = {
            'Expert': 'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',
            'Advanced': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
            'Intermediate': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30'
        };

        return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/20';

    }


  return (
    <div>Skills</div>
  )
}

export default Skills