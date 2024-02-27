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
import React from "react";
import { Link } from "react-router-dom";
import NoImg from "../assets/NoImg.png"
const SearchCoinCard = ({ coin }) => {
  // console.log(coin)
  const {large, name, id, symbol} = coin;
  return (
    <Grid
      item
      lg={3}
      md={4}
      sm={4}
      xs={3}
      className="d-flex align-items-center justify-content-center"
    >
      <Paper sx={{ width: "100%", 
               height:"25rem"
                }} className="coinAllCard">
        <Card
          sx={{
            width:"100%",
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
            padding: "2rem"
            , borderRadius: "50%" }}
            image={large ? large : NoImg }
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={"white"}
              align="center"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="error" align="center"
            sx={{fontWeight:"700"}}>
              {symbol}
            </Typography>
          </CardContent>
          <CardActions>
            
         
           <Button size="small" color="secondary">
            <Link to={`/coindetails/${coin.id}`}>
            More Details
           </Link></Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
};

export default SearchCoinCard;
