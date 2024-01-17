"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import  CloudUploadIcon  from '@mui/icons-material/CloudUpload';
// import SendIcon from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import { SendAndArchiveOutlined } from '@mui/icons-material';

const FormCard = () => {
    const [option, setOption] = React.useState('');
    const handleSubmit=()=>{
        console.log("submitted");
    }
    const handleOption = (event) => {
        setOption(event.target.value);}
        const VisuallyHiddenInput = styled('input')({
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: 1,
            overflow: 'hidden',
            position: 'absolute',
            bottom: 0,
            left: 0,
            whiteSpace: 'nowrap',
            width: 1,
          });
  return (
    <div className='mx-auto'>
      <form onSubmit={handleSubmit}>
       <div className='m-2 p-2' >
       <Box 
          sx={{
            border:'none',
            width: 500,
            maxWidth: '100%',
            backgroundColor: '#D9D9D9',
            border:'none'
       
          }}
        >
          <TextField className='text-black border-none' fullWidth label="Input Something Here" id="fullWidth" />
        </Box>
       </div>
       <div className='m-2 p-2' >
       <Box 
          sx={{
            border:'none',
            width: 500,
            maxWidth: '100%',
            backgroundColor: '#D9D9D9',
            border:'none'
       
          }}
        >
          <TextField className='text-black border-none' fullWidth label="Input Something Here" id="fullWidth" />
        </Box>
       </div>
       <div className='m-2 p-2' >
       <Box 
          sx={{
            border:'none',
            width: 500,
            maxWidth: '100%',
            backgroundColor: '#D9D9D9',
            border:'none'
       
          }}
        >
          <TextField className='text-black border-none' fullWidth label="Input Something Here" id="fullWidth" />
        </Box >
       </div>
       <div className='m-2 p-2' >
       <Box 
          sx={{
            border:'none',
            width: 500,
            maxWidth: '100%',
            backgroundColor: '#D9D9D9',
            border:'none'
       
          }}
        >
          <TextField className='text-black border-none' fullWidth label="Input Something Here" id="fullWidth" />
        </Box >
       </div>
       <div className='m-2 p-2'>
       <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Terms and Conditions" />
  <FormControlLabel required control={<Checkbox />} label="Security Policy" />

</FormGroup>
       </div>
       <div className='m-2 p-2'>
       <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      
      </RadioGroup>
    </FormControl>
       </div>
       <div className='m-2 p-2'>
       <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Select Option</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={option}
        label="Option"
        onChange={handleOption}
      >
       
        <MenuItem value="option-1">Option-1</MenuItem>
        <MenuItem value="option-2">Option-2</MenuItem>
        <MenuItem value="option-3">Option-3</MenuItem>
      </Select>
    </FormControl>
       </div>
       <div className='m-2 p-2'>
       <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
       </div>
       <div className='m-2 p-2'>
       <Button type="submit" variant="contained" endIcon={<SendAndArchiveOutlined />}>
  Submit
</Button>
       </div>
     
      </form>
    </div>
  );
};

export default FormCard;








