// import React, { Component } from "react";
import "./App.css";
import React, { useState } from "react";
import olx from "./img/olx.JPG";
// import Dropdown from 'react-dropdown';
import htwo from "./img/htwo.JPG"
import { Button } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import car from "./img/car.jpg"

function App() {
  const [allData,setAllData] = useState([]);
const [filteredData,setFilteredData] = useState(allData);
  // let itemList = [karachi, lahore, islamabad, sukkar, nawabshah];
  // const [filteredList, setFilteredList] = new useState(itemList);

  // const filterBySearch = (event) => {
  //   // Access input value
  //   const query = event.target.value;
  //   // Create copy of item list
  //   var updatedList = [...itemList];
  //   // Include all elements which includes the search query
  //   updatedList = updatedList.filter((item) => {
  //     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  //   // Trigger render with updated values
  //   setFilteredList(updatedList);
  //};
  return (
    <div style={{ color: "black" }}>
      <div>
        <img src={olx}></img>
        <Button>
          
          <DirectionsCarRoundedIcon />
          MOTORS
        </Button>
        <Button>
          
          <BusinessIcon />
          PROPERTY
        </Button>
      </div>
    
    <div>
      <img src={htwo} />
    </div>

      <div>
        <div style={{ margin: '0 auto', marginTop: '10%' }}>
<label>Search:</label>
<input type="text"   />
</div>

{filteredData.map((value,index)=>{
return alert("hh")
})}


<div>
  <img src={car}
  />
</div>
        {/* <select>
          <options>Karachi</options>
        </select> */}
      </div>
    </div>
  );
}

//class compnent rcc

export default App;
