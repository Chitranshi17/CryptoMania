import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import NoImg from "../assets/NoImg.png"
import { Link } from "react-router-dom";
const AllCoinCard = ({ coin }) => {
  const { name, image, current_price } = coin;

  return (
    <Grid
      item
      lg={3}
      md={4}
      sm={4}
      xs={3}
      className="d-flex align-items-center justify-content-center"
    >
      <Paper sx={{ width: "100%", height: "25rem" }} className="coinAllCard">
        <Card
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          className="coin-All-Card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="50%"
            sx={{
              width: "48%",
              height: "50%",
              borderRadius: "50%",
              padding: "2rem",
            }}
            image={image ? image : NoImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="error"
              align="center"
              sx={{ fontWeight: "700" }}
            >
              ${current_price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={`/coindetails/${coin.id}`}>More Details</Link>
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
};

export default AllCoinCard;
