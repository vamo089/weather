type detectCityType = () => Promise<{
  ip: string;
  city: string;
}>;

export const detectCity: detectCityType = () => {
  return fetch(
    "https://api.ipgeolocation.io/ipgeo?apiKey=1cde62f22bfd4c8387f89ddef6daf3a0&fields=city"
  ).then((response) => response.json());
};