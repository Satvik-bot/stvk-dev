import React from 'react';
import Button from '../ui/Button';
import { TRANSITIONS } from '../../constants/theme';

const Footer = () => {
  const technologies = [
    { name: 'React', url: 'https://reactjs.org' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
    { name: 'Vercel', url: 'https://vercel.com' }
  ];
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="footer" 
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="footer-content">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div 
            className="footer-tech" 
            aria-label="Technologies used"
          >
            Created with{' '}
            {technologies.map((tech, index) => (
              <React.Fragment key={tech.name}>
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-medium"
                  style={{ transition: TRANSITIONS.default }}
                  aria-label={`Learn more about ${tech.name}`}
                >
                  {tech.name}
                </a>
                {index < technologies.length - 1 && ' + '}
              </React.Fragment>
            ))}
          </div>
          <p className="text-sm text-purple-200/50">
            © {currentYear} All rights reserved
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <Button
            href="mailto:satviksagar340@gmail.com"
            variant="link"
            aria-label="Send email to satviksagar340@gmail.com"
            className="group"
          >
            <span className="group-hover:-translate-y-0.5 inline-block transition-transform duration-200">
              satviksagar340@gmail.com
            </span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;