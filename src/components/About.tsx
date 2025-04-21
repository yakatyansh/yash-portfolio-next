'use client';

import { title } from 'process';
import React from 'react';

const aboutTimeline = [
  {
    year: '2021',
    events: [
      {
        title: 'Joined Amrita Vishwa Vidyapeetham',
        description: 'B.Tech in Electrical & Computer Engineering. Took a drop year after JEE to bounce back stronger.🔥',
      },
    ],
  },
  {
    year: '2022',
    events: [
      {
        title: 'Explored core subjects',
        description: 'Dove into circuits, signals and programming. Realized a love for code over circuits.',
      },
      {
        title: 'Started Learning Web Development',
        description: 'Dived into HTML, CSS, and JavaScript. Created my first website using Bootstrap. A pokemon search website.',
      },
      {
        title: 'First Internship',
        description: 'Worked as an intern at Traboda Cyberlabs, handling front-end development using React.',
      },
    ],
  },
  {
    year: '2023',
    events: [
      {
        title: "Won a college hackathon",
        description: "Won a hackathon at college with a project which enabled people to adopt pets. It was a web app that connected pet owners with potential adopters, making the process easier and more efficient.",
      },
      {
        title: 'Developed Personal Projects',
        description: 'Built several personal projects to enhance my skills and showcase my abilities.',
      },
      
    ],
  },
  {
    year: '2024',
    events: [
      {
        title: 'Started Final Year Project',
        description:
          '',
      },
    ],
  },
  {
    year: '2025',
    events: [
      {
        title: 'Graduating Soon 🎓',
        description:
          'Wrapping up B.Tech with strong project work and clarity about the path ahead. Let’s build some magic next!',
      },
    ],
  },
];

const About = () => {
  return (
    <section className="snap-start min-h-screen bg-gray-900 py-20 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

      <div className="relative border-l-4 border-blue-500 pl-6">
        {aboutTimeline.map((block, idx) => (
          <div key={idx} className="mb-16 relative">
            {/* Year Heading */}
            <h3 className="text-2xl font-bold text-gray-100 mb-6">{block.year}</h3>
            {/* Events under year */}
            {block.events.map((event, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg shadow-md mb-6 border-l-4 border-blue-200"
              >
                <h4 className="text-lg font-semibold text-gray-700">{event.title}</h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
