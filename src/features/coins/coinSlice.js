import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chart, fetchAllCoins, fetchCoinDetails, fetchSearchCoins, fetchTrendingCoins } from "./coinService";


const initialState =  {
    allCoins:  [],
    coinData : [],
    searchCoin : [],
    singleCoin : [],
    chartData : [],
    isLoading : false,
    isSuccess : true,
    isError : false,
}

const coinSlice = createSlice({
    name : "coins",
    initialState ,
    reducers : {},
    extraReducers : builder => {
        builder
         .addCase(TrendingCoins.pending , state => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
         })
         .addCase(TrendingCoins.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.coinData = action.payload
         })
         .addCase(TrendingCoins.rejected , state => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
         })
         .addCase(getAllCoins.pending , state => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
         })
         .addCase(getAllCoins.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.allCoins = action.payload
         })
         .addCase(getAllCoins.rejected , state => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
         })
         .addCase(SearchCoins.pending , state => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
         })
         .addCase(SearchCoins.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.searchCoin = action.payload
         })
         .addCase(SearchCoins.rejected , state => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
         })
         .addCase(getCoinDetails.pending , state => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
         })
         .addCase(getCoinDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.singleCoin = action.payload
         })
         .addCase(getCoinDetails.rejected , state => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
         })
         .addCase(getChartDetails.pending , state => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
         })
         .addCase(getChartDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.chartData = action.payload
         })
         .addCase(getChartDetails.rejected , state => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
         })
         
    },
});




export default coinSlice.reducer;


// Get Trending Coins

export const  TrendingCoins = createAsyncThunk("TRENDING/COINS" , async() => {
    try {
       return await fetchTrendingCoins();
    } catch (error) {
        console.log(error.message)
    }
})



// Get All Coins

 export const getAllCoins = createAsyncThunk("GET/COINS" , async()=>{
    try {
        return await fetchAllCoins();
    } catch (error) {
        console.log(error.message)
    }
 });



//  Search Coins 

export const SearchCoins = createAsyncThunk("SEARCH/COINS", async(name)=> {
   try {
      return await fetchSearchCoins(name);
   } catch (error) {
      console.log(error.message)
   }
   
})


// Coin Details

export const getCoinDetails = createAsyncThunk("COIN/DETAILS" , async(id)=>{
  try {
   return await fetchCoinDetails(id);
  } catch (error) {
   console.log(error.message)
   console.log("Not Show")
  }
})


// Chart Details

export const getChartDetails = createAsyncThunk("GET/CHART", async(id) => {
   try {
      return await chart(id);
   } catch (error) {
      console.log(error.message)
   }
})