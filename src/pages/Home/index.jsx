import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

const Home = () => {

  const { isLogged } = useContext(DataContext)

  let res = localStorage.getItem('name')

  return (
    
      <main className='wrapper'>
        {
          isLogged ?
          <div>
            <h1>Bienvenido {res}</h1>
          </div>
          :
          <div>
            <h1>No estas logueado</h1>
          </div>
        }
      </main>
  
  )
}

export default Home