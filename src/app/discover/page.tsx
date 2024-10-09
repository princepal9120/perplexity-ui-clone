"use client"
import React, { useState } from 'react';
import { Star, Cog, DollarSign, Palette, Award, Tv, Earth } from 'lucide-react';

const DiscoverPage = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-4 flex items-center">
        <div className="text-2xl font-bold flex justify-center items-center">
            <Earth size={29}  className='mr-3'/>
            <h1>Discover</h1>
        </div>
      </header>

      <nav className="flex space-x-4 p-4 border-b border-gray-700">
        <button className="px-3 py-1 rounded bg-teal-800"><Star size={16} className="inline mr-1" /> Top</button>
        <button className="px-3 py-1"><Cog size={16} className="inline mr-1" /> Tech & Science</button>
        <button className="px-3 py-1"><DollarSign size={16} className="inline mr-1" /> Finance</button>
        <button className="px-3 py-1"><Palette size={16} className="inline mr-1" /> Arts & Culture</button>
        <button className="px-3 py-1"><Award size={16} className="inline mr-1" /> Sports</button>
        <button className="px-3 py-1"><Tv size={16} className="inline mr-1" /> Entertainment</button>
      </nav>

      <main className="flex p-4">
        <div className="flex-grow">
          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <img src="/api/placeholder/800/400" alt="Featured article" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Featured Article Title</h2>
              <p className="text-gray-400">Brief description of the featured article...</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg overflow-hidden">
                <img src={`/api/placeholder/400/200?text=Article ${item}`} alt={`Article ${item}`} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold mb-1">Article {item} Title</h3>
                  <p className="text-sm text-gray-400">Brief description...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="ml-4 w-64">
          <div className="bg-teal-900 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Make it yours</h3>
            <p className="text-sm mb-4">Select topics and interests to customize your Discover experience</p>
            <div className="space-y-2 mb-4">
              {['Tech & Science', 'Finance', 'Arts & Culture', 'Sports', 'Entertainment'].map((interest) => (
              <div key={interest} className='flex flex-wrap gap-sm'>
                  <button
                  
                  onClick={() => toggleInterest(interest)}
                  className={`px-3 py-1 m-auto rounded ${
                    selectedInterests.includes(interest) ? 'bg-teal-700' : 'bg-teal-800'
                  }`}
                >
                  {interest}
                </button>
              </div>
              ))}
            </div>
            <button className="w-full bg-teal-500 text-white py-2 rounded">Save Interests</button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default DiscoverPage;