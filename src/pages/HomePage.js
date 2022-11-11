import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HomePage = () => {
  const { username } = useContext(AppContext);

  const fetchFact = () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  };
  const { fact } = useQuery({ queryKey: ["cat"], queryFn: fetchFact() });
  return (
    <div>
      <h1>{fact}</h1>
      <h1>Hello Bro</h1>
    </div>
  );
};

export default HomePage;
