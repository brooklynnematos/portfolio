import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart functionality and secure payments",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics and management platform for social media accounts",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "TypeScript", "Chart.js"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Portfolio</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Web Developer & Designer
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Creating beautiful, functional, and user-friendly websites that help businesses grow online.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
            {/* Profile Photo */}
            <div className="lg:col-span-3 mb-8 lg:mb-0">
              <div className="max-w-[280px] mx-auto">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src="https://i.imgur.com/Q4WEbzE.jpg"
                    alt="Brooklynne Matos"
                    className="rounded-2xl shadow-xl object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="lg:col-span-9">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Hi, I'm Brooklynne, a passionate web developer dedicated to creating modern, responsive, and user-friendly websites. With experience in front-end development, I specialize in HTML, CSS, JavaScript, and React, crafting websites that not only look great but function seamlessly.
                </p>
                <p>
                  I've worked on projects ranging from business websites to custom web applications, including a construction company website and various other side projects related to my major. My goal is to build clean, efficient, and engaging digital experiences that help businesses and individuals establish a strong online presence.
                </p>
                <p>
                  Beyond web development, I'm expanding my skills in machine learning and AI, exploring ways to integrate intelligent solutions into web applications. I believe in continuous learning and staying up to date with the latest technologies to provide the best possible solutions for my clients.
                </p>
                <p className="font-medium text-gray-800">
                  🚀 Whether you need a simple landing page, a full-scale business website, or advanced functionality, I'm here to help bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:brooklynnehill451@gmail.com"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <Mail className="mr-2" /> Email
            </a>
            <a
              href="https://github.com/brooklynnematos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <Github className="mr-2" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brooklynne-matos-3b2144b7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Brooklynne Matos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;