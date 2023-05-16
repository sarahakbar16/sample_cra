import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Card.styles.css";
import "react-lazy-load-image-component/src/effects/blur.css";

interface CardProps {
  name: string;
  imageUrl: string;
  type: string;
  counter: number;
}

function PokeCard(props: CardProps) {
  return (
    <Card sx={{ Width: 200, Height: 400 }}>
      <CardActionArea>
        <LazyLoadImage
          height="140"
          src={props.imageUrl}
          effect="blur"
          alt={"A pokemon"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.counter}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokeCard;
