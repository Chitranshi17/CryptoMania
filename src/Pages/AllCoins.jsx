import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoins } from "../features/coins/coinSlice";
import AllCoinCard from "../Components/AllCoinCard";

const AllCoins = () => {
  const { allCoins, isLoading, isSuccess, isError } = useSelector(
    (state) => state.coins
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoins());
  }, []);

  if (isError) {
    return (
      <Typography sx={{ backgroundColor: "primary" }} color="error">
        Something Went Wrong !!
      </Typography>
    );
  }

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "30rem",
          alignItems: "center",
          justifyContent: "center",
          height :"100vh"
        }}
        className="searchCoinBg"
      >
        <CircularProgress />
      </Box>
    );
  }
  if (!allCoins) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "30rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <>
        <Typography
          className="heading-top bg-light"
          variant="h3"
          style={{ marginTop: "4rem" }}
          sx={{ marginTop: "4rem" }}
        >
          All Coins
        </Typography>
        <div className="allCoins" color="primary">
          <div className="allCoinsData">
            <Grid container spacing={2} sx={{ padding: "1rem" }}>
              {allCoins.map((coin) => (
                <AllCoinCard key={coin.id} coin={coin} />
              ))}
            </Grid>
          </div>
        </div>
      </>
    </div>
  );
};

export default AllCoins;
