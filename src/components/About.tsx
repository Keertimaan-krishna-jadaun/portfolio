import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              alt="Professional headshot"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <p className="text-xl text-gray-600 mb-8">
              With over 8 years of experience in software development, I specialize in
              building scalable web applications and microservices. I'm passionate about
              clean code, performance optimization, and creating exceptional user experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <Code2 className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="font-bold mb-2">Clean Code</h3>
                <p className="text-gray-600">Writing maintainable and scalable solutions</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Rocket className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">Pushing boundaries with modern tech</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Users className="w-8 h-8 text-cyan-500 mb-4" />
                <h3 className="font-bold mb-2">Leadership</h3>
                <p className="text-gray-600">Mentoring and team collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};