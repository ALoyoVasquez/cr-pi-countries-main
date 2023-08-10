import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setId] = useState ("");

   // const handleChange = (event) => {
   //    setId(event.target.value);
   // }

   return (
      <div className={style.container}>
         <input className={style.input}  type="text" />
         <button className={style.button}  onClick={()=>{ onSearch(id); }}>Search</button>
         {/* <input className={style.input} type='search' value={id}/> */}
         {/* <input className={style.input} type='search' onChange={handleChange} value={id}/> */}
         {/* <button className={style.button} onClick={()=>{ onSearch(id); } } >  Add   </button> */}
         {/* <button className={style.button} onClick={()=>{
            onSearch(`${Math.floor(Math.random() * (826 - 1 + 1) + 1)}`);
         } }>Rand</button> */}
      </div>
   );
}