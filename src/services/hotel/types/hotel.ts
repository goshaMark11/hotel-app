export type Location = {
  name: string;
  country: string;
  state: string | null;
  geo: {
    lon: number;
    lat: number;
  };
}

export type Hotel = {
  hotelId: number;
  hotelName: string;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
  priceAvg: number;
  priceFrom: number;
  locationId: number;
  location: Location;
  pricePercentile: Record<string, number>;
}