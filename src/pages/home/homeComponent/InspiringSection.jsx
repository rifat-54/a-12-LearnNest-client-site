import React from 'react';
import { Link } from 'react-router-dom';

const InspiringSection = () => {
    
        return (
          <section className="bg-blue-50 mt-14 py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Inspire the Future, Share Your Knowledge
              </h2>
              <p className="text-gray-700 mb-8">
                Join LearnNest as a teacher and make a lasting impact by guiding learners across the globe. 
                Flexible schedules, a supportive platform, and opportunities to grow await you!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img 
                    src="https://i.ibb.co.com/zRmyQ3m/download-6.jpg" 
                    alt="Flexible Schedule" 
                    className="h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-blue-900">
                    Flexible Schedules
                  </h3>
                  <p className="text-gray-600">
                    Teach at your convenience and set your own hours.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img 
                    src="https://i.ibb.co.com/whVkQy1/download-7.jpg" 
                    alt="Earn Money" 
                    className="h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-blue-900">
                    Earn While Teaching
                  </h3>
                  <p className="text-gray-600">
                    Earn competitive pay while sharing your passion and knowledge.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img 
                    src="https://i.ibb.co.com/W3Gn3TM/download-8.jpg" 
                    alt="Global Reach" 
                    className="h-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-blue-900">
                    Global Reach
                  </h3>
                  <p className="text-gray-600">
                    Connect with students from all over the world.
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Getting Started is Easy
                </h3>
                <ol className="list-decimal list-inside text-gray-700 text-left mx-auto max-w-lg">
                  <li>Sign up and create your account.</li>
                  <li>Build a profile showcasing your expertise.</li>
                  <li>Start teaching and inspiring learners.</li>
                </ol>
              </div>
              <Link to={'/teach-on'}>
              <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition">
                Join as a Teacher
              </button>
              </Link>
            </div>
          </section>
        );
      
      
};

export default InspiringSection;