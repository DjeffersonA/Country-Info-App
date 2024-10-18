import React from 'react';
import Link from 'next/link';
import { Country } from '@/app/types';
import { GET } from '@/app/api/countries';

const Home: React.FC = async () => {
  const response = await GET();
  const countries: Country[] = await response.json();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Country List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map((country: Country) => (
          <li key={country.countryCode} className="border rounded shadow bg-gray-800 p-4 transition-transform transform hover:scale-105">
            <Link href={`/countries/${country.countryCode}`} className="text-yellow-400 hover:text-yellow-300">
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;