import Head from 'next/head'
import { useRouter } from 'next/router'
import { Row, Col } from 'antd';
import styles from '../../styles/Home.module.css'

const Restaurant = () => {

  const router = useRouter();

  return (
    <>
    <Row style={{margin: '1rem 0'}}>
      <Col span={20} offset={2}>
        <Head>
          <title>{ router.query.restaurant }</title>
        </Head>

        <h1>{ router.query.restaurant }</h1>
      </Col>
    </Row>
    </>
  )
}
export default Restaurant;