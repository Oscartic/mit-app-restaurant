import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const Restaurant = () => {

  const router = useRouter();

  return (
    <h1>Dynamic Restaurant Page { router.query.restaurant}</h1>
  )
}
export default Restaurant;