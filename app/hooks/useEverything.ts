import { useQuery } from "@tanstack/react-query";
import type { Response} from "../types/newsType";
import axios from "axios";




const useEverything = ({ search }: { search: string }) => {
  const fetchSearch = () => {
    return axios
      .get<Response>(
        `https://newsdata.io/api/1/latest?apikey=pub_51702cbdd5bd7e39b5c0844410a5b1033f6b0&q=${search}&language=en`
      )
      .then(({ data }) => data.results)
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
