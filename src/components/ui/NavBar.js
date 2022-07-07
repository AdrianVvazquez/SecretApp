import { Link, NavLink } from 'react-router-dom';
import '../../styles.css'

export const Navbar = () => {

    const handleLogout = () => {
        console.log('logout');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Don't say it!
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/nuevo"
                    >
                        Nuevo
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/explorar"
                    >
                        Explorar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        Perfil
                    </span>

                    <button 
                        className="nav-item nav-link btn" 
                        to="/login"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}