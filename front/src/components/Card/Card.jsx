import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/action';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import style from './Card.module.css';

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {
   
   const [isFav, setFavs] = useState(false);

   const handleFavorite = () =>{
      isFav ? removeFav(id) : addFav({id, name, status,species, gender, origin, image, onClose})

      setFavs(!isFav)
   };
   
   useEffect(() =>{
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFavs(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={style.container}>
         <main className={style.main}>
         
         <img className={style.image} src={image} alt={name} />

         <h1 className={style.fav}>
         {
            isFav ? (<button onClick={handleFavorite}>❤️</button>) 
            : (<button onClick={handleFavorite}>🤍</button>)
         }
         </h1>
         <button className={style.button} onClick={()=> {onClose(id)}} >X</button>
         <Link to={`/detail/${id}`} >
         <h2 className={style.name}>{name}</h2>
         </Link>
      
         <div className={style.character}>
         <h2> Species: {species}</h2>
         <h2> Gender: {gender}</h2>
         {/* <h2> Origin: {origin}</h2>
         <h2> Status: {status}</h2> */}
         </div>
         </main>
      </div>
   );
};

const mapDispatchProps = (dispatch) =>{
   return {
      addFav: (character)=> dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
   }
};

const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispatchProps)(Card)
