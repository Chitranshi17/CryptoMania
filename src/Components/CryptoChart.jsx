import { Box, CircularProgress, Typography } from '@mui/material';
import {Chart as ChartJS, CategoryScale, LineElement, LinearScale, PointElement } from 'chart.js';
import React from 'react'
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)


const CryptoChart = () => {
  const {chartData, isError, isLoading} = useSelector(state => state.coins);
  const data = {
    labels: chartData.map((dataPoint)=>new Date(dataPoint[0]).toLocaleTimeString()),
    datasets: [
      {
        label : "Price",
        data : chartData.map((dataPoint)=>dataPoint[1]),
        borderColor : "white",
        fill : false
      }
    ]
  }
if(isLoading){
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

if(!chartData){
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
if(isError){
  return(
    <Box sx={{
      display: "flex",
      width: "100%",
      height: "30rem",
      alignItems: "center",
      justifyContent: "center",
      height :"100vh"
    }}
    className="searchCoinBg"
    >
      <Typography variant='h3' color={"error"}>
        Oops!! Something Went Wrong...
      </Typography>
    </Box>
  )
}
  return (
    <>
    <Box sx={{height:"85vh"}}>
      <Line data={data} style={{width:"100%", height:"90%"}}/>
    </Box>
    </>
  )
}

export default CryptoChart
