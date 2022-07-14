import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

const Home = () => {

  const { isLogged } = useContext(DataContext)

  let res = localStorage.getItem('name')

  return (
    isLogged ?
      <main className='wrapper'>Bienvenido {res}</main>
      : null
  )
}

export default Home