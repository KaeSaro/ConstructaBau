import React from 'react';
import Image from 'next/image';
import { Title } from '@/components/Title';

const TeamMember = ({ name, position, image, phone, email }) => {
  return (
    <div className="flex flex-col items-start bg-background p-6 rounded-lg hover:cursor-pointer">
      <div className="relative w-full h-[275px] overflow-hidden rounded-[10px]">
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
          <span className="text-[#D0312D] -ml-0.4">.</span>
        </h3>
        <p className="text-[20px] font-ibm-plex-mono uppercase text-[[#1a1a1a]] mt-1">{position}</p>
        {phone && <p className="text-[16px] font-ibm-plex-mono text-[#D0312D] mt-1">{phone}</p>}
        {email && <p className="text-[16px] font-ibm-plex-mono text-[#D0312D] mt-1">{email}</p>}
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
      phone: '+49 151 7022 0139',
      email: 'ng@c-bau.com',
    },
    {
      name: 'Julian Gerdes',
      position: 'Prokurist',
      image: '/julian.JPG',
      phone: '+49 151 5182 8205',
      email: 'jg@c-bau.com',
    },
    {
      name: 'Eyüp Keser',
      position: 'Polier',
      image: '/test.JPG',
      phone: '+49 171 5592 440',
      email: 'ek@c-bau.com',
    },
    {
      name: 'Don Carlos',
      position: 'Security Manager',
      image: '/carlos.JPG',
      phone: null,
      email: null,
    },
    {
      name: 'Momo',
      position: 'Feel Good Manager',
      image: '/momo.jpg',
      phone: null,
      email: null,
    },
  ];

  return (
    <div className="flex flex-col mt-[304px]">
      <div className="flex items-center mb-1">
        <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
        <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          Team
        </h1>
      </div>

      <Title withDot>Constructa Bau – ein unabhängiger Blick</Title>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-32">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            position={member.position}
            image={member.image}
            phone={member.phone}
            email={member.email}
          />
        ))}
      </div>
    </div>
  );
}
