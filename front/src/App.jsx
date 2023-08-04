import './App.css';
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites'
const EMAIL = 'milton21delgado@gmail.com';
const PASSWORD = 'rick2023';

const URL_BASE = 'https://rym2-production.up.railway.app/api/character';
const API_KEY_HAN = 'key=henrym-han10md'

const App = () =>{
   const {pathname} = useLocation();

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
};

   useEffect(() =>{
      !access && navigate('/')
   }, [access]);

   const onSearch = (id) =>{
      axios(`${URL_BASE}/${id}?${API_KEY_HAN}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id)=>{
      setCharacters(
         characters.filter(char =>{
            return char.id !== Number(id)
         })
      )
   };

   return (
      <div className="App">
         {pathname !== '/' && <Nav onSearch={onSearch}/>}

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>

            <Route path='/home' element={<Cards characters={characters}onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
