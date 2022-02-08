import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/Link'
import CardsRestaurants from '../../components/CardsRestraurants'
import SearchForm from '../../components/SearchForm'

const Restaurants = () => {

  const restaurants = [
    {id: 1, name: 'WoodsHill'},
    {id: 2, name: 'Fiorellas'},
    {id: 3, name: 'Karma'},
  ]

  return (
    <>
      <Head>
        <title>Restaurants</title>
      </Head>
      <CardsRestaurants />
    </>
  )
}
export default Restaurants;