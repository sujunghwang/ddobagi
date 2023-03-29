import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SigoonSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">시/군/구 선택</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="시/군/구 선택"
          onChange={handleChange}
          style={{
            backgroundColor:"white",
            color:"black",
            borderRadius:"20px",
            fontSize:"20px",
          }}
        >
          <MenuItem value={1}>종로구</MenuItem>
          <MenuItem value={2}>중구</MenuItem>
          <MenuItem value={3}>용산구</MenuItem>
          <MenuItem value={4}>마포구</MenuItem>
          <MenuItem value={5}>동대문구</MenuItem>
          <MenuItem value={6}>광진구</MenuItem>
          <MenuItem value={7}>영등포구</MenuItem>
          <MenuItem value={8}>은평구</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}