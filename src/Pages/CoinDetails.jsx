import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import bg from "../assets/bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getChartDetails, getCoinDetails } from "../features/coins/coinSlice";
import Chart from "react-apexcharts";
import { useParams } from "react-router-dom";
import CryptoChart from "../Components/CryptoChart";

const CoinDetails = () => {
  const { singleCoin, isLoading, isSuccess, isError } = useSelector(
    (state) => state.coins
  );


  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinDetails(params.id));
    dispatch(getChartDetails(params.id));
  }, []);

  // const [state, setState] = useState({
  //   options: {
  //     chart: {
  //       id: "basic-bar",
  //     },
  //     xaxis: {
  //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  //     },
  //   },
  //   series: [
  //     {
  //       name: "series-1",
  //       data: [30, 40, 45, 50, 49, 60, 70, 91],
  //     },
  //   ],
  // });

  if(!singleCoin || isLoading){
    return(
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
    )
  }

  return (
    <>
      <Typography
        className="heading-top"
        variant="h3"
        // style={{ marginTop: "4rem" }}
        sx={{marginBottom: {
          xs: 3,
          sm: 4,
          md: 4,
          lg: 5,
          xl: 5,
        },
        paddingTop:{
          xs: 13,
          sm: 15,
          md: 15,
          lg: 16,
          xl: 17,
        }
      }}
      >
        Coin Details
      </Typography>
      <Box sx={{ marginTop: ".3rem", height: "auto", width: "100%" }}>
        <div className="coin-container-dtls">
          <Box className="d-flex align-items-center justify-content-center coinDtlsDesign">
            {/* Image heree */}
            <div className="imgDtls">
              <div className="coinImg">
                <img src={singleCoin.image?.large} alt="noImg" />
              </div>
            </div>
            {/* Coin Details */}
            <div className="coinDtls">
              <Typography align="center" variant="h4" color={"white"}>
                Name: {singleCoin.name}
              </Typography>
              <Typography variant="h6" color={"white"}>
                Symbol : {singleCoin.symbol}
              </Typography>
              <Typography color={"white"}>
                Current price[USD] :{" "}
                {singleCoin.market_data?.current_price?.usd}
              </Typography>
              <Typography color={"white"}>
                Current price[INR] :{" "}
                {singleCoin.market_data?.current_price?.inr}
              </Typography>
              <Typography color={"white"}>
                Description : {singleCoin.description?.en}
              </Typography>
            </div>
          </Box>

          {/* Coin Graph */}
          <Box
            sx={{
              width: "100%",
              height: "10rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              marginTop: "2rem",
            }}
          >

            <Box
              sx={{
                width: "88%",
                height: "100%",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {singleCoin.public_notice}
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: {
                xs: 410,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: "auto",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              marginTop: "2rem",
            }}
          >
            <Box className="coinGraph mt-5 px-5 d-flex align-items-center justify-content-center flex-column">
              <Typography variant="h4" align="start" sx={{ color: "white" , height:"10rem"}}>
                Coin Chart Based On Prices :
              </Typography>
              {/* <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="80%"
              /> */}
              <CryptoChart/>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default CoinDetails;
