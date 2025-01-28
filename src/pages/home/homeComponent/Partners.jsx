import React from 'react';

const Partners = () => {
    const partners = [
        {
          name: "TechCorp",
          logo: "https://i.ibb.co.com/T2pDbVF/download-5.jpg",
          description: "Empowering learners with innovative tech solutions.",
          link: "https://techcorp.com",
        },
        {
          name: "EduPlus",
          logo: "https://i.ibb.co.com/HYm6Hs9/download-1.jpg",
          description: "Partnering to deliver industry-relevant skills training.",
          link: "https://eduplus.com",
        },
        {
          name: "SkillHub",
          logo: "https://i.ibb.co.com/QXjYrF7/download-1.png",
          description: "Driving digital transformation in education.",
          link: "https://skillhub.com",
        },
      ];
    
    return (
        <div>
            <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Esteemed Partners</h2>
        <p className="text-gray-600 mb-10">
          Collaborating with industry leaders to create a meaningful impact.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Partners;