import React from 'react';

const TeamMember = ({ name, position, image, bio }) => {
  return (
    <div className="flex flex-col items-start bg-[#f1f2eb] p-6 rounded-lg hover:cursor-pointer">
      <div className="relative w-full h-[174px] overflow-hidden rounded-[10px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-[10px] transition-all duration-300 ease-in-out hover:rounded-none hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-[32px] font-['IBM_Plex_Mono',_sans-serif] font-bold uppercase text-left">
          {name}
          <span className="text-[#e36800] -ml-2">.</span>
        </h3>
        <p className="text-[20px] font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#e36800] mt-1">{position}</p>
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
      image: '/api/placeholder/329/174',
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
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
