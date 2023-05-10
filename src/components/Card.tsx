import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./Card.styles.css";

interface CardProps {
  name: string;
  imageUrl: string;
  type: string;
}

function PokeCard(props: CardProps) {
  return (
    <Card sx={{ Width: 200, Height: 400}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imageUrl}
          alt={"A pokemon"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokeCard;
