import { useState } from "react";
import style from "./SearchBar.module.css";
import { getCountryByName } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const SearchBar = () => {
  //   const { onSearch } = props;
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(getCountryByName(e.target.value));
  };

  return (
    <div className={style.container}>
      {/* <h5>Search Country : {" "} </h5> */}
      <input type="search" onChange={handleChange} placeholder="Search Country by Name" />
    </div>
  );
};

export default SearchBar;
