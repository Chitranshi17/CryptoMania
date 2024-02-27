import React from "react";
import Form from "./Form";
import {  Box } from '@mui/material'

const TopSec = () => {
  return (
    <Box component="div" className="top-sec">
      <div className="formContainer">
        <Form/>
      </div>
    </Box>
  );
};

export default TopSec;
