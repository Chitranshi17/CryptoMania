import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchCoins } from '../features/coins/coinSlice';

const Form = () => {
 
  const {searchCoin} = useSelector(state => state.coins)

  const [search , setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(SearchCoins(search));
      setSearch("");
    }
  useEffect(()=>{
    dispatch(SearchCoins(search))
  },[search])

  return (
    <form action="" onSubmit={(e)=>handleSubmit(e)}>
      <TextField
        placeholder="Enter Here...."
        label="CryptoMania"
        variant="filled"
        className="form-control"
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
        required
      ></TextField>
    
      <Button sx={{ bgcolor: 'background',color:"black"
       }}  className="float-end" variant="contained" type='submit' >
        <Link   to="/search" className='text-light'>Search</Link>
      </Button>
    </form>
  );
};

export default Form;
