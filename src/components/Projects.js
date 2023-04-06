import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Praesent malesuada risus et orci lobortis.',
    link: 'https://example.com/project2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Donec auctor, enim in pellentesque cursus.',
    link: 'https://example.com/project3',
  },
];

const Projects = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-200 p-4 rounded-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
