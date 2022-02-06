import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const Restaurant = () => {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{ router.query.restaurant }</title>
      </Head>
      <h1>{ router.query.restaurant }</h1>
    </>
  )
}
export default Restaurant;