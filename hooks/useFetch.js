import { useState, useEffect } from "react";
import axios from "axios";
export default function useFetch(baseUrl) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb${baseUrl}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(reponse.message);
      }
    };
    fetchData();
  }, []);
  return [data, isLoading];
}
