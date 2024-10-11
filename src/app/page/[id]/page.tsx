"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const QuantumDoom = () => {
  return (
    <div className="bg-white text-black p-4 max-w-4xl mx-auto">
      <Image
        src="/image/feature.png"
        alt="Logo"
        width={1000}
        height={50}
        className="object-cover"
      />

      <h1 className="text-3xl font-bold mb-2">
        Quantum Computer Doom Challenge
      </h1>
      <div className="flex items-center mb-4 text-sm">
        <button className="flex items-center bg-gray-200 rounded-full px-3 py-1 mr-4">
          Ask follow-up
          <ChevronDown className="ml-1 w-3 h-3" />
        </button>
        <span className="text-gray-500">2 min read</span>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 pr-4">
          <p className="text-gray-700 mb-4">
            Quantum computing is an advanced field of computation that leverages
            the principles of quantum mechanics to process information in
            fundamentally different ways than classical computers. While
            classical computers use bits as the smallest unit of data
            (represented as either 0 or 1), quantum computers use quantum bits,
            or qubits, which can exist in multiple states simultaneously due to
            the phenomena of superposition and entanglement.
          </p>
        </div>
        <div className="md:w-1/3">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="font-semibold mb-2">Contents</h2>
            <ul className="space-y-1 text-sm">
              <li>Introduction</li>
              <li>Quandoom Technical Challenges</li>
              <li>Simulation on Classical Computers</li>
              <li>Unique Gameplay Features</li>
              <li>Development Insights and Future</li>
            </ul>
          </div>
        </div>
      </div>
     
        
     
    </div>
  );
};

export default QuantumDoom;
