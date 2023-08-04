import About from '../About/About';
import SearchBar from '../SearchBar/SearchBar'
import { Link, NavLink } from 'react-router-dom';
import style from './Nav.module.css'
const Nav = ({onSearch}) => {
    return(
        <nav>
            <SearchBar onSearch = {onSearch}/>

            <div className={style.div}>

            <Link to='/about'>
                <button className={style.buton}>
                    <span>About</span>
                </button>
            </Link>

            <Link to='/home'>
                <button className={style.buton}>
                <span>Home</span>
                </button>
            </Link>

            <Link to= '/favorites'>
                <button className={style.buton}>
                <span>Favorites</span>
                </button>
            </Link>
            
            </div>

        </nav>
    )
};

export default Nav;