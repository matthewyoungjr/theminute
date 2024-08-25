import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Response } from "../types/newsType";

export const useTopHeadlines = () => {
  const fetchHeadlines = () => {
    return apiClient
      .get<Response>("/top-headlines?country=fr")
      .then((res) => res.data.articles)
      .catch((error) => {
        console.error(error.message);
        throw error;
      });
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["top-headlines"],
    queryFn: fetchHeadlines,
    retry: 2,
    staleTime: 60000, // 60 seconds
  });

  return { data, isLoading, error };
};
