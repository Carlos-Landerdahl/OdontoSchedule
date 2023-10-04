import { useEffect, useState } from "react";
import Card from "../Components/Card/Index";
import { api } from "../services/api";

export const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  useEffect(() => {
    api.get("/dentista")
      .then(response => {
        setDentistas(response.data);
      })
      .catch(error => {
        console.error("Error fetching dentists:", error);
      });
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container mb-5">
        {dentistas.map(dentista => (
          <Card key={dentista.matricula} dentista={dentista} />
        ))}
      </div>
    </>
  );
};

export default Home;
