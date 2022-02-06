import Head from 'next/head'
import { Row, Col } from 'antd';

const Home = () => {
  return (
    <>
      <Head>
        <title>MITRestaurants</title>
      </Head>
      <Row style={{margin: '1rem 0'}}>
          <Col span={20} offset={2}>
          <h1>Hello from Restaurants</h1>

          </Col>
      </Row>
    </>
  )
}
export default Home;