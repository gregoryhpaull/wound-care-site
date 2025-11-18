import React from 'react';

interface WoundCardProps {
  title: string;
  description: string;
  image: string;
  onLearnMore: () => void;
}

export default function WoundCard({ title, description, image, onLearnMore }: WoundCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <button
          onClick={onLearnMore}
          className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
        >
          Learn More →
        </button>
      </div>
    </div>
  );
}
