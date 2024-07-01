import React, { useState } from "react";


function SearchBar({value, setValue, setPage}) {
  const handleChange =(e)=> {
    setPage(1)
    setValue(e.target.value);
  }
  return (
    <div className="p-4 w-full flex gap-5 rounded-2xl mb-28">
      <input value= {value} onChange= { (e)=>handleChange(e)}type="text" placeholder="Search for movies and TV series" className="w-full rounded-xl flex-1 h-14 outline-none border-none focus:border-b-2 text-lg pl-3 md:text-3xl placeholder:text-gray-500" />
      {/* <button className="text-3xl">Search</button> */}
    </div>
  );
}

export default SearchBar;
