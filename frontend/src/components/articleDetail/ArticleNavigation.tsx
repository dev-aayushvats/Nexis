import React, { useEffect, useState } from 'react';

interface ArticleNavigationProps {
  sections: { id: string; title: string }[]; // Array of sections
}

const ArticleNavigation: React.FC<ArticleNavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      }
    });
  };

  const scrollToSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <div className="sticky top-4">
      <h2 className="text-lg font-semibold">In this article</h2>
      <ul className="mt-2 space-y-1">
        {sections.map((section) => (
          <li key={section.id} className="flex items-center">
            <span
              className={`w-2 h-8 rounded-md mr-2 ${
                activeSection === section.id ? 'bg-indigo-600' : 'bg-indigo-100'
              }`}
            ></span>
            <button
              onClick={() => scrollToSection(section.id)} // Scroll to section on click
              className={`block w-full text-left p-2 rounded ${
                activeSection === section.id
                  ? ' text-indigo-800 font-bold'
                  : 'text-indigo-600'
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleNavigation;
