import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function PetCard({ pet, jwt, setPetsDb }) {
  const classes = useStyles();

  const [isLiked, setIsLiked] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      const resp = await axios.post("http://localhost:4000/get-liked-pets", {
        jwt,
      });
      const likedPets = resp.data;
      likedPets.map((el) => {
        if (el.id == pet.id) {
          setIsLiked(true);
        }
      });
      console.log(isLiked);
    }
    fetchData();
  }, []);

  async function likePet() {
    const petid = pet.id;
    // const token = jwt;
    if (isLiked) {
      await axios.post("http://localhost:4000/delete-like", {
        petid,
        jwt,
      });
      setIsLiked(false);
    } else {
      await axios.post("http://localhost:4000/like-pet", {
        petid,
        jwt,
      });
      setIsLiked(true);
    }
    // let heartedPets = await axios.post("http://localhost:4000/get-liked-pets", {
    //   jwt,
    // });
    // setPetsDb(heartedPets.data);
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={pet.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pet.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {pet.type}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {pet.age}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pet.about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FavoriteIcon
          color={isLiked ? "secondary" : "primary"}
          onClick={() => likePet()}
        ></FavoriteIcon>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
