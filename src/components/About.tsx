import React from 'react';
import { Code2, Palette, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Code2 className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-600">
              Experienced in building responsive and interactive web applications using modern frameworks
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Terminal className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">
              Proficient in creating scalable server-side applications and RESTful APIs
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Palette className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Passionate about creating beautiful and intuitive user interfaces
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}