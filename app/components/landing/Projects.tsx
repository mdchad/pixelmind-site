import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
	platform: string;
	image: string;
	link?: string;
}

const ProjectCard = ({ title, category, description, year, platform, image, link }: Project) => {
  const CardContent = () => (
    <>
      {image && (
        <div className="relative w-full h-48 mb-4 bg-gray-200 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
          />
        </div>
      )}
      <div>
        <div className="font-mono uppercase text-xs tracking-wider text-[#444444] mb-2">
          {category} • {year}
        </div>
        <h3 className="text-xl mb-2 font-normal text-black">
          {title}
        </h3>
        <div className="font-mono text-xs text-[#666666] mb-6">
          {platform}
        </div>
        <span className="text-xs text-gray-600 leading-relaxed">
          {description}
        </span>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#E6E6E6] p-8 flex flex-col min-h-[280px] hover:opacity-90 transition-opacity cursor-pointer"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className="bg-[#E6E6E6] p-8 flex flex-col min-h-[280px]">
      <CardContent />
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Lumiq',
      category: 'Wealth Management Platform',
			platform: 'Web, AI',
      year: '2023',
      description: 'Financial portfolio optimization platform powered by Monte Carlo simulations and real-time Bloomberg market data. Built with React and Python for institutional-grade wealth management analytics.',
			image: '/projects/lumiq.png',
			link: 'https://www.lumiq.com/'
    },
		{
			title: 'Myway',
			category: 'Islamic app',
			platform: 'Web, Mobile, AI',
			year: '2023',
			description: 'Comprehensive hadith collection featuring Kutub Sittah and Forty Hadith by Nawawi. Includes AI-powered Q&A, semantic search for contextual discovery, and AI voiceover narration. Cross-platform with Next.js and Expo.',
			image: '/projects/myway.png',
			link: 'https://www.myway.my'
		},
    {
      title: 'Tebuk',
			category: 'Islamic app',
      platform: 'Mobile',
      year: '2024',
      description: 'Quran memorization testing application featuring randomized ayat generation for self-assessment. Clean, distraction-free interface built with Next.js to help users strengthen their memorization.',
			image: '',
			link: 'https://www.tebuk.app/'
    },
    {
      title: 'Tour with Nour',
      category: 'Tourism',
			platform: 'Web, Mobile, AI',
      year: '2026',
      description: 'Tour guide booking platform connecting travelers with multilingual tour guides. Features trip selection, transport coordination, and language-based guide matching. Built with Next.js and Expo for seamless cross-platform experience.',
			image: '/projects/tour.png',
			link: 'https://rnadventure.pixelmindstudio.co'
    },
    // {
    //   title: 'Healthcare Management Platform',
    //   category: 'Web Ecosystem',
    //   year: '2023',
    //   description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. HIPAA-compliant platform streamlining patient care coordination.'
    // },
    // {
    //   title: 'Logistics Optimization Engine',
    //   category: 'AI Solutions',
    //   year: '2024',
    //   description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut. AI-powered route optimization reducing operational costs by 40%.'
    // }
  ];

  return (
    <section className="mb-16 md:mb-16 -mx-8 md:mx-0 px-8 md:px-0 py-8 md:py-0 bg-white md:bg-transparent">
      <div className="mb-8 text-black md:text-white font-mono">
        /// SELECTED WORK
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
