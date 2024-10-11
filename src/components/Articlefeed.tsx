"use client"
import React, { useState, useEffect, useRef } from 'react';
const article= [
      {
        "id": 1,
        "title": "Tesla Unveils Revolutionary Cybertruck",
        "description": "Elon Musk introduces Tesla's latest innovation - the all-electric Cybertruck with unmatched performance and futuristic design.",
        "imageUrl": "/api/placeholder/800/400?text=Cybertruck",
        "category": "Technology"
      },
      {
        "id": 2,
        "title": "NASA's Mars Rover Makes Groundbreaking Discovery",
        "description": "Perseverance rover finds evidence of ancient microbial life on Mars, potentially answering the question of extraterrestrial life.",
        "imageUrl": "/api/placeholder/400/200?text=Mars+Rover",
        "category": "Space"
      },
      {
        "id": 3,
        "title": "Global Climate Summit Reaches Historic Agreement",
        "description": "World leaders commit to aggressive carbon reduction targets in a landmark climate accord at the UN Climate Change Conference.",
        "imageUrl": "/api/placeholder/400/200?text=Climate+Summit",
        "category": "Environment"
      },
      {
        "id": 4,
        "title": "Breakthrough in Quantum Computing Achieved",
        "description": "Scientists demonstrate quantum supremacy, solving complex problems in minutes that would take classical computers thousands of years.",
        "imageUrl": "/api/placeholder/400/200?text=Quantum+Computing",
        "category": "Science"
      },
      {
        "id": 5,
        "title": "AI-Powered Healthcare Revolution Begins",
        "description": "Artificial Intelligence systems outperform human doctors in diagnosing complex medical conditions, promising a new era in healthcare.",
        "imageUrl": "/api/placeholder/400/200?text=AI+Healthcare",
        "category": "Health"
      },
      {
        "id": 6,
        "title": "Cryptocurrency Becomes Legal Tender in Major Economy",
        "description": "A G20 nation adopts Bitcoin as official currency, marking a pivotal moment in the mainstream acceptance of digital currencies.",
        "imageUrl": "/api/placeholder/400/200?text=Crypto+Currency",
        "category": "Finance"
      },
      {
        "id": 7,
        "title": "Revolutionary Clean Energy Breakthrough",
        "description": "Scientists achieve sustained nuclear fusion, paving the way for limitless, clean energy production within the next decade.",
        "imageUrl": "/api/placeholder/400/200?text=Clean+Energy",
        "category": "Technology"
      },
      {
        "id": 8,
        "title": "Global Internet Coverage Reaches 99% with Satellite Network",
        "description": "A constellation of low-orbit satellites provides high-speed internet access to the most remote areas of the planet.",
        "imageUrl": "/api/placeholder/800/400?text=Global+Internet",
        "category": "Technology"
      },
      {
        "id": 9,
        "title": "Vertical Farming Solves Urban Food Shortages",
        "description": "Innovative vertical farming techniques revolutionize urban agriculture, providing fresh produce for millions in densely populated cities.",
        "imageUrl": "/api/placeholder/400/200?text=Vertical+Farming",
        "category": "Agriculture"
      },
      {
        "id": 10,
        "title": "Self-Driving Cars Become Mainstream",
        "description": "Autonomous vehicles receive widespread regulatory approval, marking the beginning of a new era in transportation.",
        "imageUrl": "/api/placeholder/400/200?text=Self-Driving+Cars",
        "category": "Technology"
      },
      {
        "id": 11,
        "title": "Universal Basic Income Experiment Shows Promising Results",
        "description": "A large-scale UBI trial demonstrates significant improvements in quality of life and economic stability for participants.",
        "imageUrl": "/api/placeholder/400/200?text=UBI+Experiment",
        "category": "Economics"
      },
      {
        "id": 12,
        "title": "Breakthrough in Alzheimer's Treatment",
        "description": "A new drug shows unprecedented success in reversing the effects of Alzheimer's disease in human trials.",
        "imageUrl": "/api/placeholder/400/200?text=Alzheimers+Treatment",
        "category": "Health"
      },
      {
        "id": 13,
        "title": "First Human Settlement on Mars Established",
        "description": "SpaceX successfully lands the first permanent human colony on Mars, marking a new chapter in space exploration.",
        "imageUrl": "/api/placeholder/400/200?text=Mars+Settlement",
        "category": "Space"
      },
      {
        "id": 14,
        "title": "Plastic-Eating Bacteria Could Solve Ocean Pollution",
        "description": "Scientists engineer bacteria capable of breaking down plastic waste, offering a potential solution to ocean pollution.",
        "imageUrl": "/api/placeholder/400/200?text=Ocean+Cleanup",
        "category": "Environment"
      }
    ]
  

const ArticleFeed = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/articles?page=${page}`);
      const newArticles = await response.json();
      setArticles(prevArticles => [...prevArticles, ...newArticles]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          fetchArticles();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading]);

  const renderFeaturedArticle = (article, index) => (
    <div key={index} className="bg-gray-800 rounded-lg overflow-hidden mb-4">
      <img src={`/api/placeholder/800/400?text=Featured ${index + 1}`} alt={`Featured article ${index + 1}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title || `Featured Article ${index + 1} Title`}</h2>
        <p className="text-gray-400">{article.description || `Brief description of the featured article ${index + 1}...`}</p>
      </div>
    </div>
  );

  const renderArticleGrid = (startIndex, endIndex) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      {articles.slice(startIndex, endIndex).map((article, index) => (
        <div key={startIndex + index} className="bg-gray-800 rounded-lg overflow-hidden">
          <img 
            src={`/api/placeholder/400/200?text=Article ${startIndex + index + 1}`} 
            alt={`Article ${startIndex + index + 1}`} 
            className="w-full h-32 object-cover" 
          />
          <div className="p-4">
            <h3 className="font-bold mb-1">{article.title || `Article ${startIndex + index + 1} Title`}</h3>
            <p className="text-sm text-gray-400">{article.description || `Brief description of article ${startIndex + index + 1}...`}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex-grow space-y-4">
      {renderFeaturedArticle(articles[0], 0)}
      {renderArticleGrid(1, 7)}
      {renderFeaturedArticle(articles[7], 1)}
      {renderArticleGrid(8, 14)}
      <div ref={loaderRef}>
        {loading && <p className="text-center">Loading more articles...</p>}
      </div>
    </div>
  );
};

export default ArticleFeed;