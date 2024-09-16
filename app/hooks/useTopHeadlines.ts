import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import type { Response } from "../types/newsType";
import type { Key } from "react-aria";

export const useTopHeadlines = ({ country }: { country: Key }) => {
  const fetchHeadlines = () => {
    return apiClient
      .get<Response>(`/latest?country=${country}`)
      .then(({data}) => data.results)
      .catch((error) => {
        console.error(error.message);
        throw error;
      });
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["latest", country],
    queryFn: fetchHeadlines,
    retry: 2,
    staleTime: 60000, // 60 seconds
  });

  return { data, isLoading, error };
};








