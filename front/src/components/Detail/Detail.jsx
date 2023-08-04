import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import style from './Detail.module.css'
const URL_BASE = 'https://rym2-production.up.railway.app/api/character';
const API_KEY_HAN = 'key=henrym-han10md'

const Detail = () =>{
    const {id} = useParams();

    const[character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?${API_KEY_HAN}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
            });
            return setCharacter({});
    }, [id]);

    return(
        <div className={style.container}>
            <main className={style.main}>
            <img className={style.image} src={character.image && character.image} alt="" />\
            <div className={style.character}>
                <h1>Name: "{character.name && character.name}"</h1>
                <h1>Status: "{character.status && character.status}"</h1>
                <h1>Species: "{character.species && character.species}"</h1>
                <h1>Gender: "{character.gender && character.gender}"</h1>
                <h1>Origins: "{character.origins?.name && character.origins?.name}"</h1>
            </div>
            </main>
        </div>
    )
};

export default Detail;