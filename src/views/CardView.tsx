import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PokeCard from "../components/Card";
import Grid from "@mui/material/Grid";
import "./CardView.styles.css";

export default function CardView() {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("Navigate!");
    navigate("/table");
  };

  const [cardData, setCardData] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((result) => result.json())
      .then((rowData) => setCardData(rowData.pokemon));
  }, []);

  return (
    <div className="CardView">
      <AppBar position="static" style={{ background: "#00ccff" }}>
        <Toolbar>
          <Button color="inherit" onClick={() => onClick()}>
            Table View
          </Button>
        </Toolbar>
      </AppBar>
      <div className="cardslist">
        {cardData.map((item, i) => (
          <PokeCard name={item.name} imageUrl={item.img} type={item.type} />
        ))}
      </div>
    </div>
  );
}
