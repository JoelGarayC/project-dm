import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataContext';
import styles from './header.module.css'

const Header = () => {

  const { isLogged } = useContext(DataContext);

  
  return (
    <header>
      <div className={`wrapper ${styles.header}`}>
        <div className={styles.header__logo}>
          <Link to="/">
            <img src='/logo.png' alt='logo' />
          </Link>
        </div>
        <nav className={styles.header__nav}>
          {
            isLogged ? (
                <Link to="/profile">INICIA SESIÓN</Link>
              ) : (
                <button onClick={PianoLogin}>INICIA SESIÓN</button>
              ) 
          }
        </nav>
      </div>
    </header>
  )
}

export default Header