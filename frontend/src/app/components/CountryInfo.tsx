import Image from 'next/image';
import { CountryInfo } from '@/app/types';
import Link from 'next/link';

interface CountryInfoProps {
  country: CountryInfo;
}

const CountryInfoComponent: React.FC<CountryInfoProps> = ({ country }) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">{country.commonName}</h1>
      <Image
        src={country.flagUrl}
        alt={`Flag of ${country.commonName}`}
        width={64}
        height={40}
        className="mt-2"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-700">Information:</h2>
      <p className="mt-2 text-gray-600">Official Name: {country.officialName}</p>
      <p className="mt-4 inline font-semibold text-gray-700">Border Countries:</p>
      <span className="ml-2">
        {country.borderCountries && country.borderCountries.length > 0 ? (
          country.borderCountries.map((borderCountry, index) => (
            <span key={typeof borderCountry === 'string' ? borderCountry : borderCountry.countryCode}>
              <Link href={`/countries/${typeof borderCountry === 'string' ? borderCountry : borderCountry.countryCode}`} className="text-blue-500 hover:underline">
                {typeof borderCountry === 'string' ? borderCountry : borderCountry.commonName}
              </Link>
              {index < country.borderCountries.length - 1 && ', '}
            </span>
          ))
        ) : (
          <span className="text-gray-500">No neighboring countries available.</span>
        )}
      </span>
    </div>
  );
};

export default CountryInfoComponent;