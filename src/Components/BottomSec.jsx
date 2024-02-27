import React, { useEffect } from "react";
import CartItems from "./CartItems";
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TrendingCoins } from "../features/coins/coinSlice";

const BottomSec = () => {
  const { coinData, isLoading, isSuucess, isError } = useSelector(
    (state) => state.coins
  );

  const dispatch = useDispatch();

  // const trendCoin = async() =>{
  //   const trendData = await TrendingCoins();
  //   console.log(trendData);
  // }

  useEffect(() => {
    dispatch(TrendingCoins());
  }, []);

  if (isError) {
    return <Typography color="error">Something Went Wrong !!</Typography>;
  }

  if (isLoading || coinData.length === 0) {
    return (
      <Box sx={{ display: 'flex', width : "100%" , height : "30rem" , alignItems : "center" , justifyContent : "center"}}>
      <CircularProgress />
    </Box>
    )
  }

  // if (coinData.length === 0) {
  //   return <Typography>No Todo Yet.</Typography>;
  // }


  return (
   <div className="sevenTopCoin" >
    <Box  >
    <Typography   className="heading-top"  variant="h3">
      Top Trending Coins
    </Typography>
    </Box>
    <Box component="div" className="bottom-sec">
      <div className="cardContainer">
        {coinData.map((coin) => (
          <CartItems key={coin.item.coin_id} coin={coin} />
        ))}
      </div>
    </Box>

   </div>
  );
};

export default BottomSec;
