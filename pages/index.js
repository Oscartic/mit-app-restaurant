import Head from 'next/head'
import Image from 'next/image'
import SearchForm from '../components/SearchForm'
import TopMenu from '../components/Menu'
import CardsRestaurants from '../components/CardsRestraurants'

const Home = () => {
  return (
    <>
      <SearchForm />
      <CardsRestaurants />
    </>
  )
}
export default Home;