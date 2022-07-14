import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

const Home = () => {

  const { name } = useContext(DataContext)

  return (
    <main className='wrapper'>Bienvenido {name}</main>
  )
}

export default Home