import Head from 'next/head'
import CardsRestaurants from '../../components/CardsRestraurants'

const Restaurants = () => {

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