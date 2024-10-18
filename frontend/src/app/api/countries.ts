import { NextResponse } from 'next/server';
import { Country, CountryInfo } from '@/app/types';

// Get List of Countries API
export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries`);
  const countries: Country[] = await res.json();

  return NextResponse.json(countries);
}

// Get Country Info API
export async function GET_COUNTRY(countryCode: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries/${countryCode}`);
  const country: CountryInfo = await res.json();
  return NextResponse.json(country);
}