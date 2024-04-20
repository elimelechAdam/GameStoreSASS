import axios from "axios";

//arn:aws:cloudformation:us-west-2:992382628416:stack/simple-igdb-proxy/6b03dd40-fe9d-11ee-8006-02ad26183e5d
// API_CLIENT_ID = 'bdwmcnnrfwwh3we7ukdyxbjopwzmj5'
// API_CLIENT_SECRET = 'x2zku1kdck110s7oghnxfgm6kvw9sw'
const apiKey = "0bfa07026a82430e86100c58191fcbc0"; // Replace 'YOUR_API_KEY' with your actual RAWG API key
export const fetchHallOfFameGames = async () => {
  const url = `https://api.rawg.io/api/games?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const findGame = async (id) => {
  const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
