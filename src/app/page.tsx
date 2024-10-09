import { Button } from "@/components/ui/button";
import { ChevronRight, Paperclip, Search } from "lucide-react";


export default function Home() {
  return (
     <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Where knowledge begins</h1>
      
      <div className="w-full max-w-2xl">
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ask anything..."
              className="bg-transparent text-white flex-grow outline-none"
            />
            <div className="flex items-center space-x-3">
              <button className="text-gray-400 hover:text-white">
                <Search size={20} />
              </button>
              <span className="text-gray-500">Focus</span>
              <Button className="text-gray-400 hover:text-white">
                <Paperclip size={20} />
              </Button>
              <span className="text-gray-500">Attach</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Pro</span>
                <ChevronRight size={20} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gray-800 text-white p-3 rounded-lg flex items-center space-x-2">
            <span className="text-xl">🏅</span>
            <span>Summer Olympics 2024</span>
          </button>
          <button className="bg-gray-800 text-white p-3 rounded-lg flex items-center space-x-2">
            <span className="text-xl">☕</span>
            <span>Best coffee shops to work from in Paris</span>
          </button>
          <button className="bg-gray-800 text-white p-3 rounded-lg flex items-center space-x-2">
            <span className="text-xl">📚</span>
            <span>Top cookbooks in 2024</span>
          </button>
          <button className="bg-gray-800 text-white p-3 rounded-lg flex items-center space-x-2">
            <span className="text-xl">💊</span>
            <span>Market size of pharmaceutical industry</span>
          </button>
        </div>
      </div>
    </div>

  
  );
}
