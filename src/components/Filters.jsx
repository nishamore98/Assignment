import React, { useState, useEffect } from 'react';
import './style.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Filters = () => {
  const [priceMin, setPriceMin] = useState([]);
  const [priceMax, setPriceMax] = useState([]);
  const [priceRangemin, setPriceRangemin] = useState('');
  const [priceRangeMax, setPriceRangeMax] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setPriceMin([0, 500, 1000, 1500, 2000, 2500]);
    setPriceMax([
      500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000,
      6500,
    ]);
  }, []);
  function handleChange(e) {
    setPriceRangemin(e.target.value);
  }
  function handleChangeMax(e) {
    setPriceRangeMax(e.target.value);
  }

  // useEffect(() => {
    // const timeoutId = setTimeout(() => {
      // setDebouncedValue(value);
      // console.log('hel');
    // }, 300);

    // return () => clearTimeout(timeoutId);
  // }, [searchTerm]);

  function hendelOnChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div>
      <div>
        <h4>Filters</h4>
      </div>
      <hr />
      <h6>PRICE</h6>
      <div className="price-range-wrapper">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">min</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={priceRangemin}
            label="Price range"
            onChange={handleChange}
          >
            {priceMin.length &&
              priceMin.map((item, i) => {
                return (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <span className="price-section-to-span">to</span>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">max</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={priceRangeMax}
            label="Price range"
            onChange={handleChangeMax}
          >
            {priceMax.length &&
              priceMax.map((item, i) => {
                return (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
      <hr />
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h6>BRAND</h6>
          </AccordionSummary>
          <AccordionDetails>
            <input
              type="text"
              placeholder="Search brand"
              onChange={hendelOnChange}
            />
          </AccordionDetails>
        </Accordion>
      </div>
      <hr />
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h6>COLOR</h6>
          </AccordionSummary>
          <AccordionDetails>
            <input type="checkbox" value="red" />
            <label for="vehicle1"> Red</label>
            <br />
            <input type="checkbox" value="yellow" />
            <label for="vehicle2">Yellow</label>
            <br />
            <input type="checkbox" value="blue" />
            <label for="vehicle3">Blue</label>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default Filters;
