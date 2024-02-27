import axios from "axios";

export const fetchTrendingCoins = async() => {
    const response = await axios.get("/api/v3/search/trending");
    console.log(response.data.coins)
    return response.data.coins;
}

export const fetchAllCoins = async() => {
    const response = await axios.get("/api/v3//coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
    // console.log(response.data);
    return response.data;
}

export const fetchSearchCoins = async(name) => {
    const response = await axios.get(`/api/v3/search?query=${name}`);
    console.log(response.data.coins)
    return response.data.coins;
}

export const fetchCoinDetails = async(id) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?market_data=true
    `)
    console.log(response.data)
    return response.data;
}

export const chart = async(id) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=1`)
    console.log(response.data)
    return response.data.prices
}

