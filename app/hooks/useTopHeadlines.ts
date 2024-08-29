import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Response } from "../types/newsType";
import { Key } from "react-aria";

export const useTopHeadlines = ({ country }: { country: Key }) => {
  const fetchHeadlines = () => {
    return apiClient
      .get<Response>(`/top-headlines?country=${country}`)
      .then((res) => res.data.articles)
      .catch((error) => {
        console.error(error.message);
        throw error;
      });
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["top-headlines", country],
    queryFn: fetchHeadlines,
    retry: 2,
    staleTime: 60000, // 60 seconds
  });

  return { data, isLoading, error };
};
