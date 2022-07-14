import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return (
    <header>
      <div className={`wrapper ${styles.header}`}>
        <div className={styles.header__logo}>
          <img src='/vite.svg' alt='logo' />
        </div>
        <nav className={styles.header__nav}>
          <Link to='/'>Home</Link>
          <Link to='/register'>Registro</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header