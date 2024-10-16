import { useState } from 'react';

function InterestSelector() {
  

  // List of available interests
  interface Interest {
    id: number;
    name: string;
  }
  
  const interests: Interest[] = [
    { id: 1, name: 'Tech & Science' },
    { id: 2, name: 'Finance' },
    { id: 3, name: 'Arts & Culture' },
    { id: 4, name: 'Sports' },
    { id: 5, name: 'Entertainment' },
  ];


  const [selectedInterests, setSelectedInterests] = useState<Interest[]>([]); // Assuming you're using React Hooks
  
  const toggleInterest = (interest: Interest) => {
    if (selectedInterests.some(item => item.id === interest.id)) {
      // Remove the interest if it exists in the selectedInterests
      setSelectedInterests(selectedInterests.filter(item => item.id !== interest.id));
    } else {
      // Add the interest if it doesn't exist in the selectedInterests
      setSelectedInterests([...selectedInterests, interest]);
    }
  };
  

  // Save interests (you can handle the save logic here)
  const saveInterests = () => {
    // Extract the names of the selected interests
    const interestNames = selectedInterests.map(interest => interest.name);
    
    alert(`Selected Interests: ${interestNames.join(', ')}`);
  };
  

  return (
    <div className="bg-gray-800 p-4 w-72 rounded-lg shadow-lg">
      <h3 className="text-teal-300 text-lg font-semibold mb-3">Make it yours</h3>
      <p className="text-gray-400 mb-4">Select topics and interests to customize your Discover experience</p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {interests.map((interest) => (
          <button
            key={interest.id}
            onClick={() => toggleInterest(interest)}
            className={`${
              selectedInterests.some(item => item.id === interest.id)
                ? 'bg-teal-500 text-white'
                : 'bg-gray-700 text-gray-300'
            } py-2 px-3 rounded-md text-sm font-medium`}
          >
            {interest.name}
          </button>
        ))}
      </div>

      <button
        onClick={saveInterests}
        className="w-full bg-teal-500 text-white py-2 rounded-md font-medium hover:bg-teal-600 transition"
      >
        Save Interests
      </button>
    </div>
  );
}

export default InterestSelector;
