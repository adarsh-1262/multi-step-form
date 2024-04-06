import React from 'react';
import FoundationalMathImage from '../assets/foundational-math.jpeg';
import MathematicalThinkingImage from '../assets/mathematical-thinking.jpeg';

const ProductPage = () => {
  // Dummy data for courses
  const courses = [
    { id: 1, title: 'Foundational Math', description: 'Build your foundational skills in algebra, geometry, and probability', image: FoundationalMathImage },
    { id: 2, title: 'Mathematical Thinking', description: 'Build your thinking skills in algebra, geometry, and probability', image: MathematicalThinkingImage },
    // add more courses here
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Learning paths based on your answers</h1>
        <p className='mb-4'>Choose one to get started. You can switch anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-gray-200 rounded-md p-4">
              <img src={course.image} alt={course.title} className="w-full mb-4 rounded-md" />
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-700">{course.description}</p>
              <a href={`/course/${course.id}`} className="block mt-2 text-blue-600 hover:underline">View Course</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
