import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

const Home = () => {

  const { name } = useContext(DataContext)

  let res = localStorage.getItem('name')

  return (
    <main className='wrapper'>Bienvenido {res}</main>
  )
}

export default Home