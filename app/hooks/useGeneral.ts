import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Response } from "../types/newsType";

const useGeneral = () => {
  const fetchGeneral = () =>
    apiClient
      .get<Response>("/top-headlines")
      .then(({ data }) => data.articles)
      .catch((error) => console.log(error.message));

  const { data, error, isLoading } = useQuery({
    queryKey: ["general"],
    queryFn: fetchGeneral,
  });

  return { data, isLoading, error };
};
