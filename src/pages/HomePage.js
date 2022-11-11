import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HomePage = () => {
  const { username } = useContext(AppContext);

  const fetchFact = async () => {
    const { data } = await axios.get("https://catfact.ninja/fact");
    return data;
  };

  const { data, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: fetchFact,
    enabled: false,
  });

  return (
    <div>
      <h1>{data?.fact}</h1>
      <h1>Tayfun babadan bilgi almanator.</h1>
      <button onClick={refetch}> Bilgi al.</button>
    </div>
  );
};

export default HomePage;
