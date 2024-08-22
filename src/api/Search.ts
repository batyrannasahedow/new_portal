import axios from "axios";
import { apiKey, apiUrl } from "../constants/apiUrl";

export const getSearch = async (value: string) => {
  try {
    const response = await axios.get(`${apiUrl}everything?q=${value.trim()}&apiKey=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching search results: ", error);
    return null; // Hata durumunda null dönebilirsiniz veya hata yönetimini istediğiniz gibi yapabilirsiniz
  }
};
export default getSearch;
