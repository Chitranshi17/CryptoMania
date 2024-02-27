import React from 'react'

import { AppBar, Box, Button, Switch, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Navbar = ({changeTheme}) => {

  const handleTheme = () => {
    changeTheme();
  }

  return (
    <AppBar className='appbar' sx={{ bgcolor: 'background.default',
    color: 'text.primary'}}>
    <Toolbar className='d-flex align-items-center justify-content-between'>
      <Typography color='primary' variant='h4' sx={{color : ""}} >
        <Link to="/">
        CryptoMania
        </Link>
      </Typography>
      <Box>
      {/* <Switch {...label} color='secondary' defaultChecked onClick={handleTheme} sx={{backgroundColor : "secondary" , color : "secondary"} } /> */}
      <Link to={"/allCoins"} sx={{backgroundColor:"black", color:"black"}} className=''>
        <Button  variant='outlined'>
        AllCoins
        </Button>
      </Link>
      </Box>
    </Toolbar>
  </AppBar>

  )
}

export default Navbar
