import React from 'react';
import { notFound } from 'next/navigation';
import CountryInfoComponent from '@/app/components/CountryInfo';
import CountryPopulation from '@/app/components/CountryPopulation';
import { CountryInfo } from '@/app/types';
import { GET_COUNTRY } from '@/app/api/countries';

interface Params {
  params: {
    countryCode: string;
  };
}

const CountryPage = async ({ params }: Params) => {
  const { countryCode } = params;

  const res = await GET_COUNTRY(countryCode);
  if (!res.ok) {
    return notFound();
  }

  const country: CountryInfo = await res.json();

  return (
    <div className="container mx-auto px-4 py-6">
      <CountryInfoComponent country={country} />
      <div className="my-6" />
      <CountryPopulation country={country} />
    </div>
  );
};

export default CountryPage;