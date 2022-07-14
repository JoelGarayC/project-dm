import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import styles from './home.module.css'

const Home = () => {

  const { isLogged } = useContext(DataContext)

  let res = localStorage.getItem('name')

  return (
    
      <main className={`wrapper ${styles.home}`}>
        {
          isLogged ?
          <div>
            <h1>Bienvenido {res}</h1>
          </div>
          :
          <div>
            <p>No estas logueado</p>
          </div>
        }
      </main>
  
  )
}

export default Home