"use client";
import React, { useState } from "react";
import { Star, Cog, DollarSign, Palette, Award, Tv, Earth } from "lucide-react";
import InterestSelector from "@/components/aside";
import Link from "next/link";

const DiscoverPage = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const articles = [
    { id: 1, title: "Featured Article", description: "Brief Description" },
    { id: 2, title: "Tech News", description: "Latest updates in tech..." },
    { id: 3, title: "Finance Market", description: "Current market trends..." },
    { id: 4, title: "Sports Update", description: "Top sports headlines..." },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-4 flex items-center">
        <div className="text-2xl font-bold flex justify-center items-center">
          <Earth size={29} className="mr-3" />
          <h1>Discover</h1>
        </div>
      </header>

      <nav className="flex space-x-4 p-4 border-b border-gray-700">
        <button className="px-3 py-1 rounded bg-teal-800">
          <Star size={16} className="inline mr-1" /> Top
        </button>
        <button className="px-3 py-1">
          <Cog size={16} className="inline mr-1" /> Tech & Science
        </button>
        <button className="px-3 py-1">
          <DollarSign size={16} className="inline mr-1" /> Finance
        </button>
        <button className="px-3 py-1">
          <Palette size={16} className="inline mr-1" /> Arts & Culture
        </button>
        <button className="px-3 py-1">
          <Award size={16} className="inline mr-1" /> Sports
        </button>
        <button className="px-3 py-1">
          <Tv size={16} className="inline mr-1" /> Entertainment
        </button>
      </nav>

      <main className="flex p-4">
        <div className="flex-grow">
          {/* Featured Article */}
          <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Featured article"
              className="w-full h-48 object-cover"
            />
            {/* Redirect to dynamic article page */}
            <Link href={`/page/${articles[0].id}`}>
              <div className="p-4 cursor-pointer">
                <h3 className="font-bold mb-1">{articles[0].title}</h3>
                <p className="text-sm text-gray-400">
                  {articles[0].description}
                </p>
              </div>
            </Link>
          </div>

          {/* List of Articles */}
          <div className="grid grid-cols-3 gap-4">
            {articles.slice(1).map((article) => (
              <div
                key={article.id}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <img
                  src="https://via.placeholder.com/400x200"
                  alt={article.title}
                  className="w-full h-32 object-cover"
                />
                {/* Redirect to dynamic article page */}
                <Link href={`/page/${article.id}`}>
                  <div className="p-4 cursor-pointer">
                    <h3 className="font-bold mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-400">
                      {article.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <aside className="ml-4 w-64">
          <InterestSelector />
        </aside>
      </main>
    </div>
  );
};

export default DiscoverPage;
