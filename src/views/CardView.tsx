import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PokeCard from "../components/Card";
import "./CardView.styles.css";

export default function CardView() {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("Navigate!");
    navigate("/table");
  };

  const onClickCounter = () => {
    console.log("Counter!");
    setCounter(counter + 1);
  };
  const [cardData, setCardData] = useState<any[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [date, setDate] = useState(new Date());
  const [alphabetizeData, setAlphabetizeData] = useState<any[]>([]);

  useEffect(() => {
    console.log("FETCH");
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((result) => result.json())
      .then((rowData) => setCardData(rowData.pokemon));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setAlphabetizeData(cardData);
  }, [cardData]);

  const onClickSort = () => {
    cardData.sort((a, b) => a.name.localeCompare(b.name));
    setAlphabetizeData(cardData);
  };

  return (
    <div className="CardView">
      <AppBar position="static" style={{ background: "#00ccff" }}>
        <Toolbar>
          <Button color="inherit" onClick={() => onClick()}>
            Table View
          </Button>
          <Button color="inherit" onClick={() => onClickSort()}>
            Sort Data 
          </Button>
          <Button color="inherit" onClick={() => onClickCounter()}>
            Update Counter: {counter}
          </Button>
          {date.toLocaleTimeString()}
        </Toolbar>
      </AppBar>
      <div className="cardslist">
        {alphabetizeData.map((item, i) => (
          <PokeCard
            name={item.name}
            imageUrl={item.img}
            type={item.type}
            counter={counter}
          />
        ))}
      </div>
    </div>
  );
}
