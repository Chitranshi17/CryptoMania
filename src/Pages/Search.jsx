import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import SearchCoinCard from "../Components/SearchCoinCard";

const Search = () => {
  const { searchCoin, isLoading, isSuccess, isError } = useSelector(
    (state) => state.coins
  );

  if (isError) {
    return <Typography color="error">Something Went Wrong !!</Typography>;
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
          height: "100vh",
        }}
        className="searchCoinBg"
      >
        <CircularProgress />
      </Box>
    );
  }
  if (!searchCoin) {
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
    <>
      <Typography
        className="heading-top"
        variant="h3"
        sx={{ marginTop: {
          xs: 9,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 10,
        }
         }}
      >
        All Search Coins
      </Typography>
      <Box className="searchCoinBg" sx={{ backgroundColor: "Primary" }}>
        <Grid container spacing={2}>
          {searchCoin.map((coin) => (
            <SearchCoinCard key={coin.id} coin={coin} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Search;
