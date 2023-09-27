import { useEffect, useState } from "react";
import Card from "../Components/Card/Index";
import axios from "axios";

export const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  useEffect(() => {
    axios.get("https://dhodonto.ctd.academy/dentista")
      .then(response => {
        console.log(response);
        setDentistas(response.data);
      })
      .catch(error => {
        console.error("Error fetching dentists:", error);
      });
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentistas.map(dentista => (
          <Card key={dentista.matricula} dentista={dentista} />
        ))}
      </div>
    </>
  );
};

export default Home;
