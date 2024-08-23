import axios from 'axios';
import { apiKey, apiUrl } from '../constants/apiUrl';

export const getHeadlines = async (countryCode: string) => {
  try {
    const response = await axios.get(
      `${apiUrl}top-headlines?country=${countryCode}&category=sports&apiKey=${apiKey}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching headlines:', error);
    throw error;
  }
};
export default getHeadlines;
