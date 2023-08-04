import { useState } from "react";
import style from './SearchBar.module.css';

const SearchBar = ({onSearch}) => {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <div className={style.div}>
         <input className={style.input} type='search' value={id} onChange={handleChange} />
         <button class={style.btn} onClick={()=> onSearch(id)}>
            <span>Agregar</span>
         </button>
      </div>
   );
}

export default SearchBar;