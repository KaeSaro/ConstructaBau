import React from 'react';
import Image from 'next/image';
import { Title } from '@/components/Title';

const TeamMember = ({ name, position, image }) => {
  return (
    <div className="flex flex-col items-start bg-background p-6 rounded-lg hover:cursor-pointer ">
      <div className="relative w-full h-[174px] overflow-hidden rounded-[10px] ">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          quality={100}
          className="w-full h-full object-cover rounded-[10px] transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-[32px] font-montserrat font-bold uppercase text-left">
          {name}
          <span className="text-[#FF0000] -ml-0.4">.</span>
        </h3>
        <p className="text-[20px] font-ibm-plex-mono uppercase text-[#FF0000] mt-1">{position}</p>
      </div>
    </div>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: 'Nina Gerdes',
      position: 'Geschäftsführerin',
      image: '/nina.JPG',
    },
    {
      name: 'Julian Gerdes',
      position: 'Prokurist',
      image: '/julian.JPG',
    },
    {
      name: 'Eyüp Keser',
      position: 'Polier',
      image: '/eyo.JPG',
    },
    {
      name: 'Don Carlos',
      position: 'Security Manager',
      image: '/carlos.JPG',
    },
    {
      name: 'Momo',
      position: 'Feel Good Manager',
      image: '/momo.jpg',
    },
  ];

  return (
    <div className="flex flex-col mt-[304px]">
      <div className="flex items-center mb-1">
        <span className="w-2 h-2 rounded-full bg-[#FF0000] ml-2 mr-1"></span>
        <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          Team
        </h1>
      </div>

      <Title withDot>Constructa Bau – ein unabhängiger Blick</Title>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-32">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} name={member.name} position={member.position} image={member.image} />
        ))}
      </div>
    </div>
  );
}
