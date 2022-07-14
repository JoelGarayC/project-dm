
const Home = () => {

  let res = localStorage.getItem('name')

  return (
    <main className='wrapper'>Bienvenido {res}</main>
  )
}

export default Home