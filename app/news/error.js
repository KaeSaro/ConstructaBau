'use client';

import { useEffect } from 'react';
import { Content } from '../../components/Content';

export default function NewsError({ error, reset }) {
  useEffect(() => {
    console.error('News error:', error);
  }, [error]);

  return (
    <Content>
      <div className="mt-[304px]">
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
          <h1 className="text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase">News</h1>
        </div>
        <div className="mt-32">
          <p className="font-['IBM_Plex_Mono',_sans-serif] text-[#1a1a1a] mb-4">
            Die News-Seite konnte nicht geladen werden.
          </p>
          <p className="font-['IBM_Plex_Mono',_sans-serif] text-sm text-gray-500 mb-6">
            Bitte prüfen Sie die Datenbankverbindung (DATABASE_URI bzw. DATABASE_URL) in .env.local.
          </p>
          <button
            onClick={reset}
            className="px-4 py-2 bg-[#D0312D] text-white font-['Montserrat',_sans-serif] text-sm uppercase hover:bg-[#b02824] transition-colors"
          >
            Erneut versuchen
          </button>
        </div>
      </div>
    </Content>
  );
}
