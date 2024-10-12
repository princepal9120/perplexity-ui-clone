"use client";
import React from "react";
import { Star, Cog, DollarSign, Palette, Award, Tv, Earth } from "lucide-react";
import InterestSelector from "@/components/aside";
import Link from "next/link";

import Image from "next/image";

const DiscoverPage = () => {
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
            <Image
              src="/image/tesla.jpg"
              width={80}
              height={30}
              alt="Featured article"
              className="w-full h-48 object-cover"
            />
            {/* Redirect to dynamic article page */}
            <Link href={`/page/${articles[0].id}`}>
              <div className="p-4 cursor-pointer">
                <h3 className="font-bold mb-1">Tesla Unveiled Cybercab</h3>
                <p className="text-sm text-gray-400">
                  esla has unveiled its highly anticipated Cybercab robotaxi,
                  showcasing a fleet of 20 sleek, autonomous vehicles at the
                  &ldquo;We, Robot&rdquo; event held at Warner Bros. Discovery studio. As
                  reported by TechCrunch, the Cybercab features a design
                  reminiscent of a smaller Cybertruck, complete with suicide
                  doors and no steering wheel or pedals, signaling Tesla&apos;s bold
                  step towards a fully autonomous future.
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
                  src="/image/nasa.jpg"
                  alt={article.title}
                  className="w-full h-32 object-cover"
                />
                {/* Redirect to dynamic article page */}
                <Link href={`/page/${article.id}`}>
                  <div className="p-4 cursor-pointer">
                    <h3 className="font-bold mb-1">
                      World-First Ovarian Cancer Vaccine
                    </h3>
                    <p className="text-sm text-gray-400">
                      According to reports from the University of Oxford,
                      researchers are developing the world&apos;s first vaccine to
                      prevent ovarian cancer, called OvarianVax, which aims to
                      teach the immune system to recognize and attack
                      early-stage cancer cells.
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
