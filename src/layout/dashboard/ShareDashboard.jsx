import React from 'react';
import { User, Book, ClipboardList } from "lucide-react";
import useRole from '../../hook/useRole';
const ShareDashboard = () => {
    const[role]=useRole()
    console.log(role);
    const roleInfo = {
        Student: {
          title: "Welcome, Student!",
          description: "Access your classes, assignments, and progress reports here.",
          icon: <Book className="text-blue-500 w-10 h-10" />,
          tips: [
            "View upcoming classes.",
            "Submit assignments on time.",
            "Track your learning progress.",
          ],
        },
        Teacher: {
          title: "Hello, Teacher!",
          description:
            "Manage your classes, upload resources, and track student performance.",
          icon: <ClipboardList className="text-green-500 w-10 h-10" />,
          tips: [
            "Create new lessons and materials.",
            "Check student submissions.",
            "Engage with your students effectively.",
          ],
        },
        Admin: {
          title: "Greetings, Admin!",
          description: "Monitor and manage all activities across the platform.",
          icon: <User className="text-yellow-500 w-10 h-10" />,
          tips: [
            "Manage user accounts.",
            "Oversee class schedules.",
            "Generate platform analytics.",
          ],
        },
      };

      const currentRole = roleInfo[role] || {
        title: "Welcome to the Dashboard!",
        description: "Explore the features available based on your role.",
        icon: <User className="text-gray-500 w-10 h-10" />,
        tips: [
          "Discover new features.",
          "Customize your dashboard.",
          "Explore resources.",
        ],
      };
    
    return (
        <div>
           <section className="p-6 bg-base-200 min-h-screen flex justify-center items-center">
      <div className="card w-full max-w-lg shadow-xl border rounded-2xl bg-base-100">
        <div className="card-body items-center text-center">
          <div className="flex justify-center mb-4">{currentRole.icon}</div>
          <h2 className="card-title text-2xl font-bold text-gray-700">
            {currentRole.title}
          </h2>
          <p className="text-gray-600 mb-6">{currentRole.description}</p>
          <ul className="space-y-3 text-gray-600">
            {currentRole.tips.map((tip, index) => (
              <li
                key={index}
                className="flex items-center text-left text-sm"
              >
                <span className="badge badge-sm badge-ghost mr-2"></span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ShareDashboard;