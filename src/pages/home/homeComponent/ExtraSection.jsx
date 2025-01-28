import React from 'react';

const ExtraSection = () => {
    
        return (
          <div className="bg-gray-50 min-h-screen">
            {/* Why Join Us Section */}
            <section className="py-12 bg-white">
              <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-6">Why Choose LearnNest?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Empower your teaching journey with flexibility, resources, and a global reach.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 bg-gray-100 rounded-xl shadow">
                    <div className="text-5xl text-blue-500 mb-4">⏰</div>
                    <h3 className="text-xl font-semibold mb-2">Flexible Schedules</h3>
                    <p className="text-gray-600">Teach at your convenience with our adaptable scheduling options.</p>
                  </div>
                  <div className="p-6 bg-gray-100 rounded-xl shadow">
                    <div className="text-5xl text-green-500 mb-4">🌍</div>
                    <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                    <p className="text-gray-600">Connect with students and teachers from around the world.</p>
                  </div>
                  <div className="p-6 bg-gray-100 rounded-xl shadow">
                    <div className="text-5xl text-purple-500 mb-4">📚</div>
                    <h3 className="text-xl font-semibold mb-2">Teaching Resources</h3>
                    <p className="text-gray-600">Access exclusive tools to enhance your teaching experience.</p>
                  </div>
                  <div className="p-6 bg-gray-100 rounded-xl shadow">
                    <div className="text-5xl text-yellow-500 mb-4">🏆</div>
                    <h3 className="text-xl font-semibold mb-2">Rewards & Recognition</h3>
                    <p className="text-gray-600">Earn recognition and rewards for your teaching excellence.</p>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Success Stories Section */}
            <section className="py-12 bg-gray-100">
              <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-6">Transforming Lives Through Education</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Hear how LearnNest has impacted our community of teachers and students.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Testimonial 1 */}
                  <div className="p-6 bg-white rounded-xl shadow">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_pVTSblCWtUPZGbQhbeegDYWcoVj-Kw2KPw&s"
                      alt="Teacher testimonial"
                      className="rounded-full w-20 h-20 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                    <p className="text-gray-600">
                      "Joining LearnNest was the best decision of my career. I love the
                      flexibility and the global reach!"
                    </p>
                  </div>
      
                  {/* Testimonial 2 */}
                  <div className="p-6 bg-white rounded-xl shadow">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzBN0f2ib81n4B3QIqJMxqPizKpz7cSff1w&s"
                      alt="Student testimonial"
                      className="rounded-full w-20 h-20 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">David Lee</h3>
                    <p className="text-gray-600">
                      "LearnNest connected me with amazing tutors who helped me excel
                      in my studies."
                    </p>
                  </div>
      
                  {/* Testimonial 3 */}
                  <div className="p-6 bg-white rounded-xl shadow">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8Pu30mj6Gbh43m53SIGGTW1b8JCe79e4jw&s"
                      alt="Teacher testimonial"
                      className="rounded-full w-20 h-20 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">Emily Davis</h3>
                    <p className="text-gray-600">
                      "The resources and support on LearnNest have been invaluable to
                      my teaching journey."
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      
};

export default ExtraSection;