import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import  Home  from './Pages/Home';
import CoinDetails from './Pages/CoinDetails';
import Search from './Pages/Search';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import AllCoins from './Pages/AllCoins';


const App = () => {

  const [colors , setColors] = useState(true);

 
  const theme = createTheme({
    palette : {
      primary : {
             main : colors ? "#164863" : "#B4D4FF"
      },
      secondary : {
             main : colors ? "#161A30" : "#B6BBC4"
      },
      success : {
            main : colors ? "#163020" : "#B6C4B6"
      },
      error : {
            main : colors ? "#8C3333" : "#D71313"
      },
      warning : {
            main : colors ? "#F4CE14" : "#FFF78A"
      },
      info : {
            main : colors ? "#7FC7D9" : "#EEF5FF"
      },
    }
  })

  const changeTheme = () => {
    setColors((prev) => {
      return prev ? false : true
    }
    )
  }


  // const [dark, setDark] = useState(false);

  // const changeTheme = () => {
  //   if(dark){
  //     setDark(false)
  //   }else{
  //     setDark(true)
  //   }
  // }

  // const appTheme = createTheme({
  //   palette:{
  //     mode : dark ? "dark" : "light"
  //   }
  // })

  return (
  <ThemeProvider theme={theme} >
    <BrowserRouter>
   <Navbar  changeTheme={changeTheme}/>
   <Box bgcolor={"primary"}>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/coindetails/:id' element={<CoinDetails/>}/>
    <Route path='/allCoins' element={<AllCoins/>}/>
    <Route path='/search' element={<Search/>}/>
   </Routes>
   </Box>
   </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
