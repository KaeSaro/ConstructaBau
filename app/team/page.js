import React from 'react';
import Image from 'next/image';

const TeamMember = ({ name, position, image }) => {
  const isEyup = name === 'Eyüp Keser'; // Bedingung, um Eyüp zu erkennen
  return (
    <div className="flex flex-col items-start bg-background p-6 rounded-lg hover:cursor-pointer">
      <div className="relative w-full h-[174px] overflow-hidden rounded-[10px]">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className={`w-full h-full object-cover rounded-[10px] transition-all duration-300 ${
            isEyup ? 'filter grayscale hover:grayscale-0 hover:scale-105' : ''
          }`}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-[32px] font-montserrat font-bold uppercase text-left">
          {name}
          <span className="text-[#e36800] -ml-0.4">.</span>
        </h3>
        <p className="text-[20px] font-ibm-plex-mono uppercase text-[#e36800] mt-1">{position}</p>
      </div>
    </div>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: 'Nina Gerdes',
      position: 'Geschäftsführerin',
      image: '/api/placeholder/329/174',
    },
    {
      name: 'Julian Gerdes',
      position: 'Prokurist',
      image: '/api/placeholder/329/174',
    },
    {
      name: 'Eyüp Keser',
      position: 'Polier',
      image: '/images/Eyo.jpg',
    },
    {
      name: 'Momo',
      position: 'Feel Good Manager',
      image: '/api/placeholder/329/174',
    },
    {
      name: 'Don Carlos',
      position: 'Security Manager',
      image: '/api/placeholder/329/174',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-1">
        <span className="w-2 h-2 rounded-full bg-[#e36800] mr-1"></span>
        <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          Team
        </h1>
      </div>

      {/* Haupttext */}
      <h2 className="text-[36px] sm:text-[46.8px] md:text-[56px] lg:text-[80px] xl:text-[112px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left mt-2">
        Constructa Bau – ein unabhängiger Blick<span className="text-[#e36800] pl-1">.</span>
      </h2>

      {/* Team-Mitglieder Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-32">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            position={member.position}
            image={member.image}
            bio={member.bio}
          />
        ))}
      </div>
    </div>
  );
}
