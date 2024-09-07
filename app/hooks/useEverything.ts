import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Response, Article } from "../types/newsType";
import axios from "axios";
import { useState } from "react";




const useEverything = ({ search }: { search: string }) => {
  const fetchSearch = () => {
    return axios
      .get<Response>(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=3cd8914b298e4dc687c1c16434214127`
      )
      .then((res) => res.data.articles)
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  const { data, error } = useQuery({
    queryKey: ["search", search],
    queryFn: fetchSearch,
    enabled: !!search,
  });

  return { data, error };
};

export default useEverything;
