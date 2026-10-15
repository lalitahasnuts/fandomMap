import { NavLink } from "react-router-dom";

export default function Header() {
    return(
        <header className="header">
            <nav className="nav">
                <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Карта фандома</NavLink>
                <NavLink to="/map"      className={({isActive}) => isActive ? "active" : ""}>Карта</NavLink>
                <NavLink to="/timeline" className={({isActive}) => isActive ? "active" : ""}>Таймлайн</NavLink>
                <NavLink to="/theories" className={({isActive}) => isActive ? "active" : ""}>Теории</NavLink>
            </nav>
            <button className="search-icon" title="Поиск">🔍</button>
        </header>
    )
}