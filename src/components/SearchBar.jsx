import React, { useContext } from "react";
import "./SearchBar.css";
import { MyContext } from "../App";
const SearchBar = (props) => {
  const context = useContext(MyContext);
  return (
    <div className="search">
      <div className="heading">
        <h1>Movie Search App</h1>
      </div>
      <div className="input">
        <input type="text" placeholder="Type to Search..." value={context.name} onChange={(e)=>{
            context.setName(e.target.value);
            }}/>
        <button
          onClick={() => {
            context.setSearch(context.name,context.type)
            context.setName("")
            // console.log(context)
          }}
        >
          Search
        </button>
        
      </div>
    </div>
  );
};

export default SearchBar;
