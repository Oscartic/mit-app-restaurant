import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/Link'

const Restaurants = () => {

  const restaurants = [
    {name: 'WoodsHill'},
    {name: 'Fiorellas'},
    {name: 'Karma'},
  ]

  return (
    <>
      <Head>
        <title>Restaurants</title>
      </Head>
      <h1>Hello from Restaurants</h1>
      {
        restaurants.map(item => {
          return (
            <div>
              <Link as={`/restaurants/${item.name}`} href="restaurants/[restaurant]">
                {item.name}
              </Link>
            </div>
          )
        })
      }
    </>
  )
}
export default Restaurants;