import Head from 'next/head'
import { useRouter } from 'next/router'
import Dishes from '../../../components/Dishes';
import { DoubleRightOutlined } from '@ant-design/icons';
import styles from '../../../styles/Home.module.css'

const Restaurant = () => {

  const router = useRouter();
  console.log(router.query.id);
  return (
    <>
      <Head>
        <title>{ router.query.restaurant }</title>
      </Head>
      <h1 className={styles.main_title}>{ router.query.restaurant } <span><DoubleRightOutlined /></span> Dishes</h1>
      <Dishes restaurantId={router.query.id}/>
    </>
  )
}
export default Restaurant;