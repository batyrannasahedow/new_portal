import axios from "axios";
import { apiKey, apiUrl } from "../constants/apiUrl";

export const getHeadlines = async (city: string) => {
  try {
    const response = await axios.get(`${apiUrl}top-headlines?country=${city}&category=sports&apiKey=${apiKey}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching headlines:", error);
    throw error; // Hata durumunda isterseniz throw ile hata fırlatabilirsiniz
  }
};
export default getHeadlines;
